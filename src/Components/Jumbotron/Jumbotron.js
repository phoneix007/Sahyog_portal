import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Style from './Jumbotron.module.css'
import Steps from './../Carousel/Carousel'

const Main = (props) => {
    return (
      <div className = "container">
        <Jumbotron className = {Style.Jumbo}>
        <div className ={Style.Auth}>
          <h1 className="display-3" style={{
              fontWeight:"600",
               color: "#077563"
          }}>Sahyog</h1>
           <div className ={Style.btns}>
            <Button color="primary" >Login</Button>
            <Button color="primary">SignUp</Button>
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