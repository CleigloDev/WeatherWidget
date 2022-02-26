import { useState } from 'react';

import ForecastItem from '../ForecastItem/ForecastItem';
import TabList from '../TabList/TabList';

import './WeatherList.scss';

export default function WeatherList() {

    const _fetchForecastData = () => {
        const data = [
            {
                title: "Today", 
                items: [
                    <ForecastItem key={0} time={"Now"} temperature={"10°"} weatherIcon={"sunny"} isSmall={true}/>,
                    <ForecastItem key={1} time={"9:00 am"} temperature={"50°"} weatherIcon={"cloudy"} isSmall={true}/>,
                    <ForecastItem key={2} time={"10:00 am"} temperature={"60°"} weatherIcon={"heavyRain"} isSmall={true}/>,
                    <ForecastItem key={3} time={"11:00 am"} temperature={"80°"} weatherIcon={"partlyCloudy"} isSmall={true}/>,
                    <ForecastItem key={4} time={"12:00 am"} temperature={"100°"} weatherIcon={"snowy"} isSmall={true}/>,
                    <ForecastItem key={5} time={"13:00 am"} temperature={"20°"} weatherIcon={"rainy"} isSmall={true}/>,
                    <ForecastItem key={6} time={"14:00 am"} temperature={"90°"} weatherIcon={""} isSmall={true}/>
                ]
            },
            {
                title: "Week", 
                items: [
                    <ForecastItem key={1} time={"14:00 am"} temperature={"90°"} weatherIcon={"sunny"} isSmall={true}/>,
                    <ForecastItem key={2} time={"15:00 am"} temperature={"30°"} weatherIcon={"rainy"} isSmall={true}/>
                ]
            }
        ];

        return data;
    };

    const render = () => {
        return (
            <div className='weather-list'>
                <TabList tabs={_fetchForecastData()} />
            </div>
        );
    }

  return render();
};