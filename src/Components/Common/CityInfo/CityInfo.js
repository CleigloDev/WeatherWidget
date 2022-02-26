import { useState } from 'react';
import './CityInfo.scss';

export default function CityInfo() {
    

    const render = () => {
        return (
            <div className='city-info'>
                <div className='city-name'>
                    <p>San Francisco</p>
                </div>

                <div className='state-name'>
                    <p>California</p>
                </div>
            </div>
        );
    }

  return render();
};