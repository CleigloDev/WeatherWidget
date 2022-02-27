import { useState, useEffect, useContext } from 'react';

import WeatherRequestHandler from '../../../modules/WeatherUtils/WeatherRequestHandler';
import Utils from '../../../modules/WeatherUtils/Utils';
import { ContextManager } from '../../../modules/ContextManager';

import ForecastItem from '../ForecastItem/ForecastItem';
import TabList from '../TabList/TabList';

import './WeatherList.scss';

export default function WeatherList() {

    const [forecastInfo, setForecastInfo] = useState([]);
    const [foreCastWeek, setForecastWeekInfo] = useState([]);
    const [context, setContext] = useState(useContext(ContextManager));

    
    useEffect(() => {
        setContext(context);

        _fetchForecastData();
    }, []);


    const _fetchForecastData = async () => {
        const { latitude, longitude } = context;

        try {
            const oNow = new Date();
            const nHoursLeft =  25 - oNow.getHours();
            let weatherInfo = await WeatherRequestHandler.getHourlyForecast({
                lat: latitude,
                lon: longitude,
                hours: nHoursLeft
            });

            setForecastInfo(weatherInfo.data);
        } catch (error) {
            console.error(error);
        }
    };

    const _fetchForecastWeekData = async () => {
        const { latitude, longitude } = context;

        try {
            let weatherInfo = await WeatherRequestHandler.getDailyForecast({
                lat: latitude,
                lon: longitude,
                days: 7
            });

            setForecastWeekInfo(weatherInfo.data);
        } catch (error) {
            console.error(error);
        }
    };

    const _mapForecastData = () => {
        const data = [
            {
                title: "Today",
                items: forecastInfo.map((oForecastInfo, index) => {
                    if(index === 0) {
                        // prevent currentInfo to be different from forecast on now
                        const { temp, weather } = context;
                        const temperature = Utils.formatTemperature(temp);
                        const icon = Utils.formatIcon(weather.code);

                        return <ForecastItem
                            key={index}
                            time={'Now'}
                            temperature={temperature}
                            weatherIcon={icon}
                            isSmall={true} />
                    }

                    const temperature = Utils.formatTemperature(oForecastInfo.temp);
                    const icon = Utils.formatIcon(oForecastInfo.weather.code);
                    const time = Utils.formatTime(oForecastInfo.timestamp_utc);

                    return <ForecastItem
                        key={index}
                        time={time}
                        temperature={temperature}
                        weatherIcon={icon}
                        isSmall={true} />
                })
            },
            {
                title: "Week",
                items: foreCastWeek.map((oForecastInfo, index) => {
                    const temperature = Utils.formatTemperature(oForecastInfo.temp);
                    const icon = Utils.formatIcon(oForecastInfo.weather.code);
                    const date = Utils.formatDate(oForecastInfo.datetime);

                    return <ForecastItem
                        key={index}
                        time={index === 0 ? 'Today' : date}
                        temperature={temperature}
                        weatherIcon={icon}
                        isSmall={true} />
                })
            }
        ];

        return data;
    };

    const _selectTab = (nSelectedTab) => {
        switch (nSelectedTab) {
            case 0:
                setForecastWeekInfo([]);
                _fetchForecastData();
                break;

            case 1:
                setForecastInfo([]);
                _fetchForecastWeekData();
                break;
        }
    }

    const render = () => {
        return (
            <div className='weather-list'>
                <TabList tabs={_mapForecastData()} onSelectTab={_selectTab} />
            </div>
        );
    }

    return render();
};