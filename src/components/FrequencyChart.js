/* eslint-disable react/prop-types */
import React from 'react';
import '../App.css';
import Chart from 'react-apexcharts';


export default function FrequencyChart({ imageStats }) {
  const data = {
    options: {
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: ['red', 'green', 'blue']
      }
    },
    series: [{
      name: 'color possibility',
      data: [imageStats.redPossibility, imageStats.greenPossibility, imageStats.bluePossibility]
    }]
  };

  return (
    <Chart
      options={data.options}
      series={data.series}
      type="bar"
      width="1000"
    />
  );
}
