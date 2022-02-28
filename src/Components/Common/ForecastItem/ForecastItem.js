import WeatherIcon from '../WeatherIcon/WeatherIcon';
import './ForecastItem.scss';

export default function ForecastItem(props) {

    const render = () => {

        const { time, temperature, weatherIcon, isSmall } = props;

        return (
            <div className='forecast-item'>
                <p>{time}</p>
                <div className='weather-info-day'>
                    <WeatherIcon weatherIcon={weatherIcon} isSmall={isSmall}/>
                    <p>{temperature}</p>
                </div>
            </div>
        );
    }

  return render();
};