import React, {useState, useEffect} from 'react'
import {getCurrentConditions} from '../../actions/AppService';
import DetailsComponent from '../../Components/DetailsComponent/DetailsComponent';
import { useHistory } from 'react-router-dom';
import './FavoritesScreen.css'

function FavoritesScreen(props) {

    const [cityForcastComponent, setCityForcastComponent] = useState([]);
    let history = useHistory();
        
    useEffect(() => {
        let localArr = [];
        props.favoritesList.map(async (cityKey, i) => {
        await getCurrentConditions(cityKey.key).then(current => {
            const details = current.data[0]
            setCityForcastComponent([...localArr,
            {key:cityKey.key ,title:cityKey.city, value:details.Temperature.Imperial.Value, WeatherText:details.WeatherText, WeatherIcon: details.WeatherIcon}])
            localArr.push({key:cityKey.key ,title:cityKey.city, value:details.Temperature.Imperial.Value, WeatherText:details.WeatherText, WeatherIcon: details.WeatherIcon});
        })
        })
    },[props.favoritesList]);

    const handleClick = (cityKey, cityTitle) => {
        props.setCityForcast(cityTitle, cityKey);
        props.setCurrentPage('home');
        history.push('/');
    }

    const ForcastComponent = (cityForcastComponent.length !== 0) ? cityForcastComponent.map((current,k)=>{
                return (
            <div className="favoriteForcastComponent" key={k} onClick={()=> handleClick(current.key, current.title)}>
                <DetailsComponent 
                    title={current.title}
                    value={current.value}
                    WeatherText={current.WeatherText}
                    WeatherIcon={current.WeatherIcon} />
            </div>)
            }) : <div></div>

    return (
        <div className="favorite-container">
            {ForcastComponent}
        </div>
    )
}

export default FavoritesScreen
