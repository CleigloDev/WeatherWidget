import { useState } from 'react';
import './WeatherIcon.scss';

import cloudy from "../../../Assets/Icons/cloudy.png";
import heavyRain from "../../../Assets/Icons/heavy-rain.png";
import partlyCloudy from "../../../Assets/Icons/partly-cloudy.png";
import rainy from "../../../Assets/Icons/rainy.png";
import snowy from "../../../Assets/Icons/snowy.png";
import sunny from "../../../Assets/Icons/sunny.png";
import unknown from "../../../Assets/Icons/unknown.png";

export default function WeatherIcon(props) {
    
    const _setIcon = (sIconName) => {
        switch(sIconName) {
            case 'sunny':
                return sunny;

            case 'cloudy':
                return cloudy;

            case 'heavyRain':
                return heavyRain;

            case 'partlyCloudy':
                return partlyCloudy;

            case 'snowy':
                return snowy;

            case 'rainy':
                return rainy;

            default:
                return unknown;

        }
    };

    const render = () => {
        const { mainDiv, icon, weatherIcon } = props;

        return (
            <div className={mainDiv || 'weather-icon'}>
                <img src={_setIcon(weatherIcon)} className={icon || 'icon'}/>
            </div>
        );
    }

  return render();
};