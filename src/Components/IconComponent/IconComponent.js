import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
 
const defaults = {
  color: 'black',
  animate: true
};
 
const IconComponent = (props) => {
    const size = props.size || 400
    let icon = 'CLEAR_DAY';
    switch(props.icon) {
        case 1:
        case 2:
            icon = 'CLEAR_DAY'
            break;
        case 33:
        case 34:
            icon = 'CLEAR_NIGHT'
            break;
        case 3:
        case 4:
        case 5:
            icon = 'PARTLY_CLOUDY_DAY'
            break;
        case 35:
        case 36:
        case 37:
            icon = 'PARTLY_CLOUDY_NIGHT'
            break;
        case 6:
        case 7:
        case 8:
        case 38:
            icon = 'CLOUDY'
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 26:
        case 39:
        case 40:
        case 41:
        case 42:
            icon = 'RAIN'
            break;
        case 24:
        case 25:
            icon = 'SLEET'
            break;
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 29:
        case 43:
        case 44:
            icon = 'SNOW'
            break;
        case 32:
            icon = 'WIND'
            break;
        case 11:
            icon = 'FOG'
            break;
        default:
            icon = 'CLEAR_DAY'
}

    
    return(
        <ReactAnimatedWeather
        icon={icon}
        color={defaults.color}
        size={size}
        animate={defaults.animate}
        />
    )};
 
export default IconComponent;