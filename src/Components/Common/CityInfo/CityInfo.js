import './CityInfo.scss';

export default function CityInfo(props) {

    const render = () => {

        const { cityName, countryName } = props;

        return (
            <div className='city-info'>
                <p className='city-name'>{cityName}</p>
                {countryName && countryName !== 'not-found' ? 
                    <p className='state-name'>{countryName}</p> : null}
            </div>
        );
    }

  return render();
};