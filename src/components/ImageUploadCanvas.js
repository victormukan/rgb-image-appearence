/* eslint-disable no-console */
import React, { useState, useRef } from 'react';
import FrequencyChart from './FrequencyChart';

export default function ImageUploadCanvas() {
  const [state, setState] = useState({
    image: null,
    stats: null
  });
  const canvas = useRef(null);

  const drawImage = (image) => {
    const {current: currentCanvas} = canvas;
    const ctx = currentCanvas.getContext('2d');
    ctx.clearRect(0, 0, currentCanvas.width, currentCanvas.height);

    currentCanvas.width = image.width;
    currentCanvas.height = image.height;

    ctx.drawImage(image, 0, 0);

    return ctx.getImageData(0, 0, currentCanvas.width, currentCanvas.height)
  }

  const getStatsAndSave = (image, imageData) => {
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

 
    setState({ image, stats: imageStats})
    console.log(imageData);
    console.log(imageStats)
  }

  const readFile = (file) => {
    const fileReader = new FileReader()

    fileReader.onload = () => {
      const image = new Image();
      image.src = fileReader.result; 
      image.onload = () => {
        image.style.display = 'none';
        const imageData = drawImage(image)
        getStatsAndSave(image, imageData)
      }
    }

    fileReader.readAsDataURL(file)
  }

   
  if (state.image) {
    drawImage(state.image);
  }
  return (
    <div>
      <input type="file" onChange={e => readFile(e.target.files[0])} />
      <canvas ref={canvas} />
      { state.stats &&
      <FrequencyChart imageStats={state.stats} />}
    </div>
  );

 }
