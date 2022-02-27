import { useContext } from 'react';

import Utils from '../../modules/WeatherUtils/Utils';
import { ContextManager } from '../../modules/ContextManager';

import DynamicComponent from '../Common/HideOnScreenChange/DynamicComponent';
import CityInfo from '../Common/CityInfo/CityInfo';
import WeatherIcon from '../Common/WeatherIcon/WeatherIcon';
import WeatherDescription from '../Common/WeatherDescription/WeatherDescription';
import WeatherList from '../Common/WeatherList/WeatherList';

import './WeatherMaster.scss';

export default function WeatherMaster() {

    const contextManager = useContext(ContextManager);

    const render = () => {

        const { city_name: cityName, weather } = contextManager;

        return (
            <div className='master-main-div'>
                <DynamicComponent mediaQuery={"(min-width:600px)"}>
                    <CityInfo cityName={cityName}/>
                </DynamicComponent>
                <WeatherIcon weatherIcon={Utils.formatIcon(weather.code)}/>
                <WeatherDescription description={weather.description}/>
                <WeatherList />
            </div>
        );
    }

  return render();
};