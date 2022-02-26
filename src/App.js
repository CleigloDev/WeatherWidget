import { useState, useEffect } from 'react';

import RequestHandler from './modules/WeatherUtils/RequestHandler';

import Master from './Components/WeatherMaster/WeatherMaster'
import Detail from './Components/WeatherDetail/WeatherDetail'

import './App.scss';

function App() {

  const [currentInfo, setCurrentInfo] = useState(null);

  useEffect(() => {
    _getCurrentWeatherInfo();
  }, []);

  const _getCurrentWeatherInfo = async() => {
    try {
        const currentInfo = await RequestHandler.getCurrentInfo({
          lat:41.8917707,
          lon:12.5412766
      });
      if(currentInfo && currentInfo.data && currentInfo.data[0]) setCurrentInfo(currentInfo.data[0]);
    } catch(error) {
      console.error(error);
    }
  };

  return (
    <div>
      { currentInfo ?
        <div className="main-div box-shadow">
          <Master currentInfo={currentInfo}/>
          <Detail currentInfo={currentInfo}/> 
        </div>
        : null
      }
    </div>
  );
}

export default App;
