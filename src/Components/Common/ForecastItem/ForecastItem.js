import { useState } from 'react';

import WeatherIcon from '../WeatherIcon/WeatherIcon';
import './ForecastItem.scss';

export default function ForecastItem(props) {
    

    const render = () => {

        const { time, temperature, icon } = props;

        return (
            <div key={props.key} className='forecast-item'>
                <p>{time}</p>
                <div className='weather-info-day'>
                    <WeatherIcon />
                    <p>{temperature}</p>
                </div>
            </div>
        );
    }

  return render();
};