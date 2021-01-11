import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {
  NavLink 
} from "react-router-dom";
import './Header.css'

function Header(props) {

    return (
        <div className="header">
            <div className="container" >
                <div className="title" >
                    <div className="buttonContainer">
                        <Button onClick={props.modeChange} >
                            <div> Change Mode </div>
                        </Button>
                    </div>
                    <div>
                        Herolo Weather Task
                    </div>
                </div>
                <div className="buttons" >
                    <div className="buttonContainer">
                        <NavLink  to="/" onClick={()=> {props.setCurrentPage('home')}}>
                           <div className={props.currentPage ==='home' ? "clicked" : "notClicked"}> Home </div>
                        </NavLink>
                    </div>
                    <div className="buttonContainer">
                        <NavLink  to="/favorites" onClick={()=> {props.setCurrentPage('favorites')}}>
                            <div className={props.currentPage ==='favorites' ? "clicked" : "notClicked"}> Favorites </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
