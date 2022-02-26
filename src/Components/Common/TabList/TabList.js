import { useState } from 'react';

import ForecastItem from '../ForecastItem/ForecastItem';
import './TabList.scss';

export default function TabList(props) {

    const [selectedTab, setSelectedTab] = useState(0);

    const _renderTabs = (aTabs) => {
        return aTabs.map((oTab, index) => {
            const className = index === selectedTab ? 'tab-selected tab-rendering' : 'tab-rendering';
            return (
                <div onClick={_changeSelected.bind(this, index)} className={className} key={index}>
                    <p>{oTab.title}</p>
                </div>
            );
        });
    };

    const _renderContent = (aTabs, nSelectedTab) => {
        return aTabs[nSelectedTab].items.map((oItem, index) => {
            return (
                <ForecastItem key={index} />
            );
        });
    };

    const _changeSelected = (index) => {
        setSelectedTab(index);
    };

    const render = () => {
        return (
            <div className='tab-content'>
                <div className='tab-list'>
                    {_renderTabs(props.tabs)}
                </div>
                <div className='content-list'>
                    {_renderContent(props.tabs, selectedTab)}
                </div>
            </div>
        )
    };

  return render();
};