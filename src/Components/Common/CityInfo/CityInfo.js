import './CityInfo.scss';

export default function CityInfo(props) {

    const render = () => {

        const { cityName, countryName } = props;

        return (
            <div className='city-info'>
                <p className='city-name'>{cityName}</p>
                <p className='state-name'>{countryName || "CALIFORNIA"}</p>
            </div>
        );
    }

  return render();
};