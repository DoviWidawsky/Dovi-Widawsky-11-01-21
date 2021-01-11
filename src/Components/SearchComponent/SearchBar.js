import React, { useState } from 'react';
import {getAutoComplete, get5DaysOfForecasts} from '../../actions/AppService';
import './SearchBar.css'

export default function SearchBar(props) {
    const [value, setValue] = useState('');
    const [select, setSelect] = useState([]);
    const [errMsg, setErrMsg] = useState('');
    const [cursor, setCursor] = useState(0);

    const setDefaultState = () => {
        setValue('');
        setSelect([]);
        setCursor(0);
        setErrMsg('');
    }

    const onInputChange = async(term) => {
        if(term === ''){
            setDefaultState();
        }
        else{
            setValue(term);
            const results = await getAutoComplete(term);
            setSelect(results.data);
        }
    }

    const handleKeyDown =(e) => {
        if (e.keyCode === 38) {
            if(cursor === 0){
                setCursor(select.length - 1);
            }
            else{
                setCursor(cursor - 1);
            }
        }

        if (e.keyCode === 40) {
            if(cursor === select.length - 1){
                setCursor();
            }
            else{
                setCursor(cursor + 1);
            }
        }
        if(e.keyCode === 13 && select.length !== 0){
            handleClick(select[cursor]);
        }
    }

    const handleClick = async(city) => {
        await get5DaysOfForecasts(city.Key).then(async forecast => {
            const loc = city.LocalizedName + ',' + city.Country.ID
            await props.setCityForcast(loc, city.Key, forecast.data.DailyForecasts)
        });
        setDefaultState()
    }

    const autoCompleteItemRender = (data,i) =>{
        return(
            <div  onClick={() => handleClick(data)} className={cursor === i ? 'autocomplete-item active' : 'autocomplete-item'} key={data.Key} >
                <strong>{value.charAt(0).toUpperCase()}</strong>
                {data.LocalizedName.toString().replace(value.charAt(0).toUpperCase(),'')}
            </div>
        )
    }

  return (
    <div className="CountrySelector">
            <div className="form-group">
              <input
                  placeholder="Search city..."
                  value={value}
                  onKeyDown={ handleKeyDown }
                  onChange={event => onInputChange(event.target.value)}
                  className="form-control input-search" />
                  <div className="error">{errMsg}</div>
                  <div className="autocomplete-items">
                   {
                    (select.length === 0 && value !== '') ? <div>No match results</div> : select.map((data,i) => autoCompleteItemRender(data,i))
                    }
                   </div>
            </div>
    </div>
  );
}