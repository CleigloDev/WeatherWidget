import { useState, useEffect } from 'react';

import WeatherRequestHandler from './modules/WeatherUtils/WeatherRequestHandler';
import LocationRequestHandler from './modules/LocationUtils/LocationRequestHandler';
import LocationHandler from './modules/LocationUtils/LocationHandler';
import { ContextManager } from './modules/ContextManager';

import Master from './Components/WeatherMaster/WeatherMaster';
import Detail from './Components/WeatherDetail/WeatherDetail';
import Loader from './Components/Common/Loader/Loader';


import './App.scss';

function App() {

  const [currentInfo, setCurrentInfo] = useState(null);
  const [userLocation, setCurrentLocation] = useState(null);
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    _getUserLocation();
  }, []);

  const _getCurrentWeatherInfo = async (location) => {
    try {
      const currentInfo = await WeatherRequestHandler.getCurrentInfo({
        lat: location.latitude,
        lon: location.longitude
      });
        setCurrentInfo(currentInfo?.data[0]);
        _getCurrentState(currentInfo?.data[0]?.city_name);
    } catch (error) {
      console.error(error);
    }
  };

  const _getCurrentState = async (sCityName) => {
    try {
      const currentState = await LocationRequestHandler.getCurrentState({
        q: sCityName
      });
      const countryName = currentState?.items[0]?.address?.countryName;
      setCountryName(countryName || 'not-found');
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
      {currentInfo && userLocation && countryName ?
        <div className="main-div box-shadow">
          <ContextManager.Provider value={{
              countryName: countryName, 
              latitude: userLocation.latitude, 
              longitude: userLocation.longitude, 
              ...currentInfo
            }}>
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
