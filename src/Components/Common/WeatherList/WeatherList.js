import { useState, useEffect } from 'react';

import WeatherManager from '../../../modules/WeatherManager';
import Utils from '../../../modules/Utils';

import ForecastItem from '../ForecastItem/ForecastItem';
import TabList from '../TabList/TabList';

import './WeatherList.scss';

export default function WeatherList() {

    const [forecastInfo, setForecastInfo] = useState([]);
    const [foreCastWeek, setForecastWeekInfo] = useState([]);

    useEffect(() => {
        _fetchForecastData();
    }, []);

    const _fetchForecastData = async () => {
        try {
            let weatherInfo = await WeatherManager.getHourlyForecast({
                lat: 41.8917707,
                lon: 12.5412766
            });

            const oNow = new Date();

            weatherInfo = weatherInfo.data.filter((oForecast) => {
                const oDateForecast = new Date(oForecast.timestamp_utc);
                return true;
                return oNow.toDateString() === oDateForecast.toDateString();
            });

            setForecastInfo(weatherInfo);

        } catch (error) {
            console.error(error);
        }
    };

    const _fetchForecastWeekData = async () => {
        try {
            let weatherInfo = await WeatherManager.getDailyForecast({
                lat: 41.8917707,
                lon: 12.5412766
            });

            weatherInfo = weatherInfo.data.filter((oForecast) => {
                return true;
            });

            setForecastWeekInfo(weatherInfo);

        } catch (error) {
            console.error(error);
        }
    };

    const _mapForecastData = () => {
        const data = [
            {
                title: "Today",
                items: forecastInfo.map((oForecastInfo, index) => {
                    const temperature = Utils.formatTemperature(oForecastInfo.temp);
                    const icon = Utils.formatIcon(oForecastInfo.weather.code);
                    const time = Utils.formatTime(oForecastInfo.timestamp_utc);

                    return <ForecastItem
                        key={index}
                        time={index === 0 ? 'Now' : time}
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