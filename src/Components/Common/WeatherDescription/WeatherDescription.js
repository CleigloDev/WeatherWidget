import './WeatherDescription.scss';

export default function WeatherDescription(props) {
    

    const render = () => {
        return (
            <div className='weather-description'>
                <p>{props.description}</p>
            </div>
        );
    }

  return render();
};