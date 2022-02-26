import { useState } from 'react';
import './WeatherDescription.scss';

export default function WeatherDescription() {
    

    const render = () => {
        return (
            <div className='weather-description'>
                <p>Partly Cloudy</p>
            </div>
        );
    }

  return render();
};