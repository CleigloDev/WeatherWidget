import { useState, useEffect } from 'react';

import Utils from '../../../modules/WeatherUtils/Utils';

import './GeneralInfo.scss';

export default function GeneralInfo(props) {

    const [now, setNow] = useState(null)


    useEffect(() => {
        setTimeout(() => {
            const oNow = new Date();

            setNow(oNow);
        }, 1000);
    }, [now])


    const _mapTime = () => {
        const date = now || new Date();
        return Utils.formatTime(date);
    };

    const _mapDate = () => {
        const date = now || new Date();
        return Utils.formatDateDetail(date);
    };

    const _mapTemperature = () => {
        return Utils.formatTemperature(props.temp);
    }

    const render = () => {
        return (
            <div className='general-info'>
                <div className='day-info'>
                    <p>
                        {_mapTime()}
                    </p>
                    <p>
                       {_mapDate()}
                    </p>
                </div>
                <div className='temperature'>
                    <p>
                        {_mapTemperature()}
                    </p>
                </div>
            </div>
        );
    }

  return render();
};