import Utils from '../../../modules/Utils';

import './GeneralInfo.scss';

export default function GeneralInfo(props) {

    const _mapTime = () => {
        const date = Utils.timestampToDate(props.timestamp);
        return Utils.formatTime(date);
    };

    const _mapDate = () => {
        const date = Utils.timestampToDate(props.timestamp);
        return Utils.formatDateDetail(date);
    };

    const _mapTemperature = () => {
        return Utils.formatTemperature(props.temp);
    }

    const render = () => {
        return (
            <div className='general-info'>
                <div className='day-info'>
                    <p>
                        {_mapTime()}
                    </p>
                    <p>
                       {_mapDate()}
                    </p>
                </div>
                <div className='temperature'>
                    <p>
                        {_mapTemperature()}
                    </p>
                </div>
            </div>
        );
    }

  return render();
};