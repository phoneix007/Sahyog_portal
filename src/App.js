import React from 'react'
import Style from './App.module.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Main from './Components/Jumbotron/Jumbotron'
import SignUp from './Containers/SignUpHospital/Signup'
import List from './Components/HospitalList/List'
import LoginUser from './Components/LoginUser/Login'
import {Switch , Route} from 'react-router-dom'


const App = () =>(
<div>
  <div className={Style.Headline}>
  <img src={`${process.env.PUBLIC_URL}/Assets/Logo.jpeg`} style={{
    height : "7rem",
  }}/></div>
  <Header/>
  
  <Switch>
    <Route path='/' exact component={Main}></Route>
    <Route path="/Main" exact component={Main}></Route>
    <Route path="/List" exact component={List}></Route>
    <Route path="/SignUp" exact component={SignUp}></Route>
    <Route path="/Login" exact component={LoginUser}></Route>
   </Switch>
  <Footer/>
</div>
)

export default App;
