import Utils from '../../../modules/Utils';

import './GeneralInfo.scss';

export default function GeneralInfo() {

    const _mapTime = () => {
        return "8:43 a.m." //Utils.formatTime(props.date);
    };

    const _mapDate = () => {
        return "Monday, November 16th" //Utils.formatDateDetail(props.date);
    };

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
                        60°
                    </p>
                </div>
            </div>
        );
    }

  return render();
};