import { useState } from 'react';

import TabList from '../TabList/TabList';

import './WeatherList.scss';

export default function WeatherList() {
    
    const data = [{title: "Today", items: [{title: "ciao"}, {title: "ciao1"}, {title: "ciao"}, {title: "ciao1"}, {title: "ciao1"}, {title: "ciao"}, {title: "ciao1"}]}, 
        {title: "Week", items: [{title: "ciao"}]}];

    const render = () => {
        return (
            <div className='weather-list'>
                <TabList tabs={data} />
            </div>
        );
    }

  return render();
};