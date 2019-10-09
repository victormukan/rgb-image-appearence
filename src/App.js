import React from 'react';
import './App.css';
import FrequencyChart from './components/FrequencyChart';
import Table from './components/Table'
import { toEncodeChartData, decodedChartData } from './components/data';
import ImageUploadCanvas from './components/ImageUploadCanvas';

const App = () =>  (
  <div className="app">
    {/* <div className="flex-container">        
      <Table chartData={decodedChartData} />
      <FrequencyChart chartData={decodedChartData} />
    </div> */}

    <ImageUploadCanvas />
  </div>
);

export default App;
