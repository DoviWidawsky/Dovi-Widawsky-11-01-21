import {
  Switch,
  Route
} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {getGeoPosition, get5DaysOfForecasts, getCurrentConditions} from './actions/AppService';
import {DEFAULT_LAT, DEFAULT_LNG} from './Constants/Constants';
import Header from './Components/HeaderComponent/Header'
import Home from './Screens/HomeScreen/HomeScreen'
import Favorites from './Screens/FavoritesScreen/FavoritesScreen'
import './App.css';

function App() {

  const [favoritesKeys, setFavoritesKeys] = useState([])
  const [currentData, setCurrentData] = useState({currentCityKey: null, currentCity:null, weekForcast:null, currentForcast:null }) 
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    let cityKey, city, week, todayForcast;
    const changeLocation = (lat , lng) => {
        getGeoPosition(lat + ',' +lng).then( myLocation => 
                    {
                        const loc = myLocation.data.ParentCity || myLocation.data
                        city=(loc.LocalizedName + ' , ' + myLocation.data.Country.ID);
                        cityKey=(loc.Key)
                        getCurrentConditions(loc.Key).then(current => {todayForcast=(current.data[0])})
                        get5DaysOfForecasts(loc.Key).then( forcast => 
                            {
                            week=(forcast.data.DailyForecasts);
                            setCurrentData({currentCityKey: cityKey, currentCity:city, weekForcast:week, currentForcast:todayForcast })
                            })
                    }
                );
    }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( (position) => {
                const {latitude, longitude} = position.coords;
                changeLocation(latitude, longitude);

            });
        } else {
            changeLocation(DEFAULT_LAT, DEFAULT_LNG);
        }
  },[]);

    const setCityForcast = (loc , key , forcast) => {
      let week = forcast;
      if(!week){
        get5DaysOfForecasts(key).then( forcast => 
          {
            week=(forcast.data.DailyForecasts);
            getCurrentConditions(key).then(current => 
              setCurrentData({currentCityKey: key, currentCity:loc, weekForcast:week, currentForcast:current.data[0] }))
          })
      }
      else{
        getCurrentConditions(key).then(current => 
          setCurrentData({currentCityKey: key, currentCity:loc, weekForcast:week, currentForcast:current.data[0] }))
      }
    }

  const replaceTheme = () => {
    if (document.getElementById('app').className ==="light-theme"){
      document.getElementById('app').className = "dark-theme"
    }
    else {
      document.getElementById('app').className = "light-theme"
    }
  }

  const isSetAsFavorite = (key) => {
    for(var i = 0; i < favoritesKeys.length; i++) {
        if (favoritesKeys[i].key === key) {
            return true;
        }
    }
    return false;
  }

  const favoriteChange = (cityKey) => {
    let newFavorites = favoritesKeys;
    let toRemove = isSetAsFavorite(cityKey.key);
    if (toRemove){
      newFavorites = newFavorites.filter(keyCity=> keyCity.key !== cityKey.key)
    }
    else {
      newFavorites.push(cityKey)
    }
    setFavoritesKeys(newFavorites)
  }


  return (
      <div id="app" className="light-theme">
        <Header modeChange={replaceTheme} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <div>
        <Switch>
          <Route exact path="/">
            <Home addFavorite={favoriteChange} isSetAsFavorite={isSetAsFavorite} 
             favoritesKeys={favoritesKeys} {...currentData} setCityForcast={setCityForcast} />
          </Route>
          <Route path="/favorites">
            <Favorites favoritesList={favoritesKeys} setCityForcast={setCityForcast} setCurrentPage={setCurrentPage} />
          </Route>
        </Switch>
        </div>
      </div>
  );
}

export default App;
