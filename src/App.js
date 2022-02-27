import { useState, useEffect } from 'react';

import RequestHandler from './modules/WeatherUtils/RequestHandler';
import LocationHandler from './modules/LocationUtils/LocationHandler';
import { ContextManager } from './modules/ContextManager';

import Master from './Components/WeatherMaster/WeatherMaster';
import Detail from './Components/WeatherDetail/WeatherDetail';
import Loader from './Components/Common/Loader/Loader';


import './App.scss';

function App() {

  const [currentInfo, setCurrentInfo] = useState(null);
  const [userLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    _getUserLocation();
  }, []);

  const _getCurrentWeatherInfo = async (location) => {
    try {
      const currentInfo = await RequestHandler.getCurrentInfo({
        lat: location.latitude,
        lon: location.longitude
      });
      if (currentInfo && currentInfo.data && currentInfo.data[0]) setCurrentInfo(currentInfo.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const _getUserLocation = async () => {
    try {
      const location = await LocationHandler.getLocation();
      setCurrentLocation(location);
      _getCurrentWeatherInfo(location);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {currentInfo && userLocation ?
        <div className="main-div box-shadow">
          <ContextManager.Provider value={{latitude: userLocation.latitude, longitude: userLocation.longitude, ...currentInfo}}>
            <Master />
            <Detail />
          </ContextManager.Provider>
        </div>
        : <Loader />
      }
    </div>
  );
}

export default App;
