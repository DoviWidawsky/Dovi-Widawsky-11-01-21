import React from 'react'
import './DetailsComponent.css'
import IconComponent from '../IconComponent/IconComponent';

function DetailsComponent(props) {
    return (
        <div className="details-container" >
            <div className="details-title" >
                {props.title}
            </div>
            <div className="details-currentWeather" >
                {props.value}°
            </div>
            <div className="details-weatherIcon" >
                {props.WeatherText}
                <IconComponent icon={props.WeatherIcon} size={120}/>
            </div>
        </div>
    )
}

export default DetailsComponent
