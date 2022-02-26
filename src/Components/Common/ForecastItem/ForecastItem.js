import { useState } from 'react';

import WeatherIcon from '../WeatherIcon/WeatherIcon';
import './ForecastItem.scss';

export default function ForecastItem(props) {

    const render = () => {

        const { time, temperature, weatherIcon } = props;

        return (
            <div className='forecast-item'>
                <p>{time}</p>
                <div className='weather-info-day'>
                    <WeatherIcon weatherIcon={weatherIcon}/>
                    <p>{temperature}</p>
                </div>
            </div>
        );
    }

  return render();
};