import CityInfo from '../Common/CityInfo/CityInfo';
import GeneralInfo from '../Common/GeneralInfo/GeneralInfo';

import './WeatherDetail.scss';

export default function WeatherDetail(props) {
    

    const render = () => {

        const { city_name: cityName, temp } = props.currentInfo;

        return (
            <div className='detail-main-div'>
                <CityInfo cityName={cityName}/>
                <GeneralInfo temp={temp}/>
            </div>
        );
    }

  return render();
};