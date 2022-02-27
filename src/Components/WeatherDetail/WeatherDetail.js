import { useContext } from 'react';

import { ContextManager } from '../../modules/ContextManager';

import CityInfo from '../Common/CityInfo/CityInfo';
import GeneralInfo from '../Common/GeneralInfo/GeneralInfo';

import './WeatherDetail.scss';

export default function WeatherDetail() {
    
    const contextManager = useContext(ContextManager);

    const render = () => {

        const { city_name: cityName, temp } = contextManager;

        return (
            <div className='detail-main-div'>
                <CityInfo cityName={cityName}/>
                <GeneralInfo temp={temp}/>
            </div>
        );
    }

  return render();
};