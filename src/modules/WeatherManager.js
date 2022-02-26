const WeatherManager = () => {

    const baseURL = 'http://api.weatherbit.io/v2.0/';

    const key = 'f83ab038ece345b3829421d5a72e707f';

    const getCurrentInfo = async(oQueryParams) => {
        let sRequestURL = _addQueryParams(`${baseURL}current?`, oQueryParams);
        
        const request = await fetch(sRequestURL);
        const json = await request.json();

        return json;
    };

    const getHourlyForecast = async(oQueryParams) => {
        let sRequestURL = _addQueryParams(`${baseURL}forecast/hourly?`, oQueryParams);
        
        const request = await fetch(sRequestURL);
        const json = await request.json();

        return json;
    };

    const getDailyForecast = async(oQueryParams) => {
        let sRequestURL = _addQueryParams(`${baseURL}forecast/daily?`, oQueryParams);
        
        const request = await fetch(sRequestURL);
        const json = await request.json();

        return json;
    };


    const _addQueryParams = (sURL, oQueryParams) => {
        Object.keys(oQueryParams).map((sKey) => {
            sURL += `${sKey}=${oQueryParams[sKey]}&`;
        });

        sURL += `key=${key}`;

        return sURL;
    };

    return {
        getCurrentInfo,
        getHourlyForecast,
        getDailyForecast
    }
}

export default WeatherManager();