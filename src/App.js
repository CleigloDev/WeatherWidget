import Master from './Components/WeatherMaster/WeatherMaster'
import Detail from './Components/WeatherDetail/WeatherDetail'

import './App.scss';

function App() {
  return (
    <div className="main-div box-shadow">
      <Master weatherIcon={'partlyCloudy'}/>
      <Detail/>
    </div>
  );
}

export default App;
