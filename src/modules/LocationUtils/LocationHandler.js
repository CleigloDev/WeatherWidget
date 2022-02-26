const LocationHandler = () => {

    const getLocation = () => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                var options = {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                };
                navigator.geolocation.getCurrentPosition(_showPosition.bind(this, resolve), _showError.bind(this, reject), options);
            } else {
                reject();
                alert("Geolocation is not supported by this browser.");
            }
        });
    }

    const _showError = (fnReject, error) => {
        fnReject();
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    }

    const _showPosition = (fnResolve, position) => {
        fnResolve(position.coords);
    };

    return {
        getLocation
    }
}



export default LocationHandler();
