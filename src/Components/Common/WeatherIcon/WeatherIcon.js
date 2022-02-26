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
    
    const _setIcon = (sIconName, bIsSmall) => {

        switch(sIconName) {
            case 'sunny':
                return <img src={sunny} className={!bIsSmall ? 'icon-large' : 'icon-small-sun'}/>;

            case 'cloudy':
                return <img src={cloudy} className={!bIsSmall ? 'icon-large' : 'icon-small'}/>;

            case 'heavyRain':
                return <img src={heavyRain} className={!bIsSmall ? 'icon-large' : 'icon-small'}/>;

            case 'partlyCloudy':
                return <img src={partlyCloudy} className={!bIsSmall ? 'icon-large' : 'icon-small'}/>;

            case 'snowy':
                return <img src={snowy} className={!bIsSmall ? 'icon-large' : 'icon-small-snow'}/>;

            case 'rainy':
                return <img src={rainy} className={!bIsSmall ? 'icon-large' : 'icon-small'}/>;

            default:
                return <img src={unknown} className={!bIsSmall ? 'icon-large' : 'icon-small'}/>;
        }
    };

    const render = () => {
        const { mainDiv, weatherIcon, isSmall } = props;

        return (
            <div className={mainDiv || 'weather-icon'}>
                {_setIcon(weatherIcon, isSmall)}
            </div>
        );
    }

  return render();
};