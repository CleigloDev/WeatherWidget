import { useState } from 'react';
import './CityInfo.scss';

export default function CityInfo() {

    const render = () => {
        return (
            <div className='city-info'>
                <p className='city-name'>San Fransisco</p>
                <p className='state-name'>CALIFORNIA</p>
            </div>
        );
    }

  return render();
};