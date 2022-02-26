import { useState } from 'react';
import './WeatherMaster.scss';

export default function WeatherMaster() {
    

    const render = () => {
        return (
            <div className='master-main-div'>
                <div className='weather-icon'/>
                <div className='weather-description'/>
                <div className='weather-list'/>
            </div>
        );
    }

  return render();
};