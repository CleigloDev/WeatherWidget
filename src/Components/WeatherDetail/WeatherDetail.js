import { useState } from 'react';

import CityInfo from '../Common/CityInfo/CityInfo';
import GeneralInfo from '../Common/GeneralInfo/GeneralInfo';

import './WeatherDetail.scss';

export default function WeatherDetail() {
    

    const render = () => {
        return (
            <div className='detail-main-div'>
                <CityInfo />
                <GeneralInfo />
            </div>
        );
    }

  return render();
};