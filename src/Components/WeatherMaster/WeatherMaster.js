import { useState } from 'react';

import DynamicComponent from '../Common/HideOnScreenChange/DynamicComponent';
import CityInfo from '../Common/CityInfo/CityInfo';
import WeatherIcon from '../Common/WeatherIcon/WeatherIcon';
import WeatherDescription from '../Common/WeatherDescription/WeatherDescription';
import WeatherList from '../Common/WeatherList/WeatherList';

import './WeatherMaster.scss';

export default function WeatherMaster() {

    const render = () => {
        return (
            <div className='master-main-div'>
                <DynamicComponent mediaQuery={"(min-width:600px)"}>
                    <CityInfo/>
                </DynamicComponent>
                <WeatherIcon />
                <WeatherDescription />
                <WeatherList />
            </div>
        );
    }

  return render();
};