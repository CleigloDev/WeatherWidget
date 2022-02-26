import { useState } from 'react';

import CityInfo from '../Common/CityInfo/CityInfo';
import WeatherIcon from '../Common/WeatherIcon/WeatherIcon';
import WeatherDescription from '../Common/WeatherDescription/WeatherDescription';

import './WeatherMaster.scss';

export default function WeatherMaster() {

    const addCityInfo = () => {
        const isMobileLike = window.screen.width <= 600

        return !isMobileLike ? null : <CityInfo/>
    }
    

    const render = () => {
        return (
            <div className='master-main-div'>
                {null//addCityInfo()
                }
                <WeatherIcon />
                <WeatherDescription />
                <div className='weather-list'/>
            </div>
        );
    }

  return render();
};