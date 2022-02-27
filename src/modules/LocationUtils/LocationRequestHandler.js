const RequestHandler = () => {

    const baseURL = 'https://geocode.search.hereapi.com/';

    const key = 'mBT7dtNdvSmFqyZXfmQJb40YhqbXEaWffWNiLZi_ug8';

    const getCurrentState = async(oQueryParams) => {
        let sRequestURL = _addQueryParams(`${baseURL}/v1/geocode?`, oQueryParams);
        
        const request = await fetch(sRequestURL);
        const json = await request.json();

        return json;
    };


    const _addQueryParams = (sURL, oQueryParams) => {
        Object.keys(oQueryParams).map((sKey) => {
            sURL += `${sKey}=${oQueryParams[sKey]}&`;
        });

        sURL += `apiKey=${key}`;

        return sURL;
    };

    return {
        getCurrentState
    }
}

export default RequestHandler();