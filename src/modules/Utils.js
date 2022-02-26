const Utils = () => {

    const formatTemperature = (nTemperature) => {
        return nTemperature && `${nTemperature.toString().split(".")[0]}°`
    };

    const formatIcon = (sIconCode) => {
        sIconCode = sIconCode.toString();
        switch (sIconCode[0]) {
            case '2':
            case '3':
                return 'heavyRain';
            case '5':
            case '9':
                return 'rainy';
            case '6':
                return 'snowy';
            case '8':
                return sIconCode === '800' ? 'sunny' : sIconCode === '801' || sIconCode === '802' ? 'partlyCloudy' : 'cloudy';
            default: 
                return 'unknown'
        }
    };

    const formatDate = (sDate) => {
        const oDate = new Date(sDate);
        const nDay = oDate.getDay();
        const nDate = oDate.getDate();
        
        return `${nDate} ${_mapDayOfWeek(nDay)}`;
    };

    const formatTime = (sDate) => {
        const oDate = new Date(sDate);

        return oDate.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true});
    };

    const formatDateDetail = (sDate) => {
        const oDate = new Date(sDate);
        const nDay = oDate.getDay();
        const nMonth = oDate.getMonth();
        const nDate = oDate.getDate();
        
        return `${_mapDayOfWeek(nDay)}, ${_mapMonth(nMonth)} ${nDate}${_nth(nDate)}`;
    };


    const _nth = function(nDay) {
        if (nDay > 3 && nDay < 21) return 'th';
        switch (nDay % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    };

    const _mapDayOfWeek = (nDay) => {
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

        return days[nDay];
    }

    const _mapMonth = (nMonth) => {
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

        return months[nMonth];
    }

    return {
        formatTemperature,
        formatIcon,
        formatTime,
        formatDate,
        formatDateDetail
    }
}

export default Utils();