import React, {useState} from 'react';
import SearchBar from '../../Components/SearchComponent/SearchBar';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconComponent from '../../Components/IconComponent/IconComponent';
import DetailsComponent from '../../Components/DetailsComponent/DetailsComponent';
import './HomeScreen.css'

function HomeScreen(props) {

    const [isFavorite, setIsFavorite] = useState(props.isSetAsFavorite(props.currentCityKey))

    if(props.isSetAsFavorite(props.currentCityKey)!== isFavorite){
       setIsFavorite(props.isSetAsFavorite(props.currentCityKey)) 
    }
    
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const getAvrage = (temp) => {
        return ((temp.Maximum.Value + temp.Minimum.Value) / 2)
    }

    const WeekForcastComponent =props.weekForcast && props.weekForcast.map((forecast,i) => {
        return (
            <div className="WeekForcastComponent" key={i}>
                <DetailsComponent 
                    title={weekday[new Date(forecast.Date).getDay()]}
                    value={getAvrage(forecast.Temperature)}
                    WeatherText={forecast.Day.IconPhrase}
                    WeatherIcon={forecast.Day.Icon} />
            </div>
        )}
    )

    const changeFavorite = () => {
        setIsFavorite(!isFavorite)
        props.addFavorite({key:props.currentCityKey, city:props.currentCity})
    }

    return (
        <div className="home-container">
            <div className="searchBar">
                <SearchBar setCityForcast={props.setCityForcast} />
            </div>
            <div className="infoHeader">
                <div className="infotitle">
                    <div>{props.currentCity}</div>
                    <div>
                        {props.currentForcast?.Temperature?.Imperial?.Value}°
                    </div>
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={isFavorite? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    onClick={changeFavorite}>
                        Add to favorites
                </Button>
            </div>
            <div className="currentWeather">
                {props.currentForcast?.WeatherText}
                <IconComponent icon={props.currentForcast?.WeatherIcon} size={200}/>
            </div>
            <div className="week-day-forecast">
                {WeekForcastComponent}
            </div>
        </div>
    )
}

export default HomeScreen
