import { useState } from 'react';
import './GeneralInfo.scss';

export default function GeneralInfo() {
    

    const render = () => {
        return (
            <div className='general-info'>
                <div className='day-info'>
                    <p>
                        8:43 a.m.
                    </p>
                    <p>
                        Monday, November 16th
                    </p>
                </div>
                <div className='temperature'>
                    <p>
                        60°
                    </p>
                </div>
            </div>
        );
    }

  return render();
};