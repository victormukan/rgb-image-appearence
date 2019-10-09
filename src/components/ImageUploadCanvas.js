import React, { useState, Component } from 'react';
import FrequencyChart from './FrequencyChart';

export default class ImageUploadCanvas extends Component {

  state = {
    image: null,
    stats: null
  }

  drawImage = (image) => {
    const { canvas } = this.refs;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = image.width;
    canvas.height = image.height;


    ctx.drawImage(image, 0, 0);

    return ctx.getImageData(0, 0, canvas.width, canvas.height)
  }

  getStatsAndSave = (image, imageData) =>  {
    const imageStats = {
      pixels: imageData.height * imageData.width,
      red: 0,
      green: 0,
      blue: 0
    }

    for (let i = 0; i < imageData.data.length; i += 4) {
      imageStats.red += imageData.data[i];
      imageStats.green += imageData.data[i + 1];
      imageStats.blue += imageData.data[i + 2]
    }

    imageStats.redPossibility = Math.round(imageStats.red / imageStats.pixels * 10000) / 10000;
    imageStats.bluePossibility = Math.round(imageStats.blue / imageStats.pixels * 10000) / 10000;
    imageStats.greenPossibility = Math.round(imageStats.green / imageStats.pixels * 10000) / 10000;

 
    this.setState({ image, stats: imageStats})
    console.log(imageData);
    console.log(imageStats)
  }

  readFile = (file) => {
    const fileReader = new FileReader()

    fileReader.onload = () => {
      const image = new Image();
      image.src = fileReader.result; 
      image.onload = () => {
        image.style.display = 'none';
        const imageData = this.drawImage(image)
        this.getStatsAndSave(image, imageData)
      }
    }

    fileReader.readAsDataURL(file)
  }

  render() {
    const {image, stats} = this.state;
    if (image) {
      this.drawImage(image);
    }
    return (
      <div>
        <input type="file" onChange={e => this.readFile(e.target.files[0])} />
        <canvas ref="canvas" />
        { stats &&
        <FrequencyChart imageStats={stats} />}
      </div>
    );
  }
}
