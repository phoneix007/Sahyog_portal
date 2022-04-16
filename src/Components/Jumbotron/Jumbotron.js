import React, { useContext, useState } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Style from './Jumbotron.module.css'
import Steps from './../Carousel/Carousel'
import {NavLink} from 'react-router-dom'
import SearchBar from './../SearchBar/SearchBar'
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer'

const Main = (props) => {
  const isUser = useSelector((state) => state.ChangeLogInState);
  console.log(isUser);
  
    return (
      <>
      <div className = "container">
        <Jumbotron className = {Style.Jumbo}>
        <div className ={Style.Auth}>
          <h1 className="display-3" style={{
              fontWeight:"600",
               color: "#077563"
          }}>Sahyog</h1>
          <SearchBar/>
           <div className ={Style.btns}>
             {
                !isUser ? 
                <div>
                {/* <Button variant="outline-primary"><NavLink to = "/Login" className={Style.link}>Login </NavLink></Button> */}
                {/* <Button><NavLink to = "/UserSignUp" className={Style.link}>User SignUp</NavLink></Button>  */}
                </div> : <p>{`Welcome ${localStorage.getItem('email')}`}</p>
             }
            </div>
            </div>
          <p className="lead"></p>
          <hr className="my-2" />
          
          <p className={Style.paragraph}>Right Hospital at the right time.🚑</p>
          <p className="lead">
          </p>
        </Jumbotron>
        <Steps/>
      </div>
      <Footer/>
      </>
    );
  };

export default Main;