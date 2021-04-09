import React, { useState } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Style from './Jumbotron.module.css'
import Steps from './../Carousel/Carousel'
import {NavLink} from 'react-router-dom'
import SearchBar from './../SearchBar/SearchBar'
import {usePosition} from './../CurrentLocation/CurrentLocation'


const Main = (props) => {
  
  // const lat = ''
  // const lon = ''

  //  const UsePositionDemo = () => {
  //   const {latitude, longitude, error} = usePosition();
  //   lat = latitude
  //   lon = longitude 
  // }
  //   UsePositionDemo();
  //   console.log(lat ,lon)
    window.navigator.geolocation
    .getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      console.log(lat)
      console.log(long)
    },console.log);

    return (
      <div className = "container">
        <Jumbotron className = {Style.Jumbo}>
        <div className ={Style.Auth}>
          <h1 className="display-3" style={{
              fontWeight:"600",
               color: "#077563"
          }}>Sahyog</h1>
          <SearchBar/>
           <div className ={Style.btns}>
            <Button color="primary"><NavLink to = "/Login">Login </NavLink></Button>
            <Button color="primary"><NavLink to = "/SignUp">SignUp</NavLink></Button>
            </div>
            </div>
          <p className="lead"></p>
          <hr className="my-2" />
          
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
          </p>
        </Jumbotron>
        <Steps/>
      </div>
    );
  };

export default Main