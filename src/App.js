import React, { useState, useEffect,useRef } from 'react';
import Chart from 'chart.js/auto';
import iconImage from './assets/25231.png';
import rainImage from './assets/heavy-rain.png';
import TemperatureImage from './assets/temperature.png';
import ClooudImage from './assets/clouddisplay.png';
import iconLogo from './assets/mylogo.png';

import './App.css'; // Assuming you have a CSS file for styling

const handleIconClick = () => {
  window.location.href = "https://github.com/LunarTear9/react_page";
};

const handleIconClick2 = () => {
  window.location.href = "https://www.pitmtech.com";
};

function getDay(timestamp, prevTimestamp) {
  const date = new Date(timestamp);
  const prevDate = new Date(prevTimestamp);
  const currentDay = date.toLocaleString('en-US', { weekday: 'long' });
  const prevDay = prevDate.toLocaleString('en-US', { weekday: 'long' });

  
  if (currentDay !== prevDay) {
    return currentDay;
  } else {
    return '';
  }
}


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const chartRef = useRef(null);
  useEffect(() => {

    fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m,precipitation_probability,cloud_cover&forecast_days=7')
      .then(response => response.json())
      .then(data => {
      
        setWeatherData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  useEffect(() => {
    if (weatherData) {
      
      if (chartRef.current !== null) {
        chartRef.current.destroy();
      }const ctx = document.getElementById('temperatureChart').getContext('2d');
      chartRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: weatherData.hourly.time.map((timestamp, index) => getDay(timestamp, index > 0 ? weatherData.hourly.time[index - 1] : null)),

          datasets: [{
            label: 'Temperature (°C)',
            data: weatherData.hourly.temperature_2m,
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [weatherData]);
  const handleNextDay = () => {
    setCurrentDayIndex(prevIndex => (prevIndex + 24 <= 71) ? prevIndex + 24 : 0);
  };

  const handlePrevDay = () => {
    setCurrentDayIndex(prevIndex => (prevIndex - 24 >= 0) ? prevIndex - 24 : 71);
  };

  return (
    <div className="App">
      <div className="gradient-background">
        <div className="TextColumn">
        <div className="icon-container" onClick={handleIconClick2}>
            <img src={iconLogo} alt="Icon" className="icon" style={{ width: '110px', height: '100px' }} />
          </div>
          <h2>Live Weather Preview</h2>
          <h3>Tokyo, Japan</h3>
          <p>Currently only supporting Temperatures</p>
          <div className="icon-container" onClick={handleIconClick}>
            <img src={iconImage} alt="Icon" className="icon" style={{ width: '40px', height: '40px' }} />
          </div>
        </div>
        {/* Your content */}
        <div className="container">
          
          <div ClassName="Header">
            <h1>Live Weather </h1>
            <h1 style={{ color: 'black', fontFamily: 'Arial', fontSize: '14px' }}>(Up to 3 days Average) </h1>
            <h1 style={{ marginLeft: 20, color: 'black', fontFamily: 'Arial', fontSize: '16px' }}>{weatherData && getDay(weatherData.hourly.time[currentDayIndex])}</h1>
            <div className="button-container">
            <button className="arrow-button" onClick={handlePrevDay}>{'<'}</button>
            <button className="arrow-button" onClick={handleNextDay}>{'>'}</button>
          </div>
            
            <div className="IconWidget">
              <img src={rainImage} alt="Icon" className="icon" style={{marginTop: 4, width: '40px', height: '40px' }} />
              <h2 style={{ marginLeft: 6, color: 'black', fontFamily: 'Arial', fontSize: '16px' }}>{weatherData && `${weatherData.hourly.precipitation_probability[currentDayIndex]}%`}</h2>
            </div>
            <div className="IconWidget">
              <img src={TemperatureImage} alt="Icon" className="icon" style={{marginTop: 4, width: '40px', height: '40px' }} />
              <h2 style={{ marginLeft: 4, color: 'black', fontFamily: 'Arial', fontSize: '16px' }}>{weatherData && `${weatherData.hourly.temperature_2m[currentDayIndex]}°C`}</h2>
            </div>
            <div className="IconWidget">
              <img src={ClooudImage} alt="Icon" className="icon" style={{ width: '50px', height: '50px' }} />
              <h2 style={{ marginLeft: 4, color: 'black', fontFamily: 'Arial', fontSize: '16px' }}>{weatherData && `${weatherData.hourly.cloud_cover[currentDayIndex]}%`}</h2>
            </div>
          </div>
          
          <div className="youtube-video">
            <iframe
              width="260"
              height="160"
              src="https://www.youtube.com/embed/MWZpVfH58qc?autoplay=1&mute=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="chart-container">
            <canvas id="temperatureChart"></canvas>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
