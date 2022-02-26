import { useState } from 'react';
import './WeatherIcon.scss';

import cloudy from "../../../Assets/Icons/cloudy.png";
import heavyRain from "../../../Assets/Icons/heavy-rain.png";
import partlyCloudy from "../../../Assets/Icons/partly-cloudy.png";
import rainy from "../../../Assets/Icons/rainy.png";
import snowy from "../../../Assets/Icons/snowy.png";
import sunny from "../../../Assets/Icons/sunny.png";
import unknown from "../../../Assets/Icons/unknown.png";

export default function WeatherIcon() {
    

    const render = () => {
        return (
            <div className='weather-icon'>
                <img src={sunny} className="icon"/>
            </div>
        );
    }

  return render();
};