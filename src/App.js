import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Style from './App.module.css'
import Header from './Components/Header/Header'
import Main from './Components/Jumbotron/Jumbotron'
import SignUp from './Containers/SignUpHospital/Signup'
import List from './Components/HospitalList/List'
import LoginUser from './Components/LoginUser/Login'
import {Switch , Route} from 'react-router-dom'
import UserSignUP from './Components/SignUpUser/SignUpUser'
import DoctorConatinerCard from './DoctorsCard/DoctorContainerCard'
import Contact from '../src/Components/ContactUs/ContactUs';

const App = () => {

 const [doctors , setDoctors] = useState([]);
 const [nameOfHospital , setNameOfHospital]  = useState('');

 const history = useHistory();

 const getDoctorsList = (docList , hosName) => {
   setDoctors(docList);
   setNameOfHospital(hosName);
   console.log(`hos: ${nameOfHospital}`)
   history.push('/doctors');
 }

 return (<div>
  <div className={Style.Headline}>
  <img src={`${process.env.PUBLIC_URL}/Assets/Logo.jpeg`} style={{
    height : "7rem",
  }} alt="Logo"/></div>
  <Header/>
  <Switch>
    <Route path="/" exact component={LoginUser}></Route>
    <Route path="/Main" exact component={Main}></Route>
    <Route path="/List" exact render={(props) => <List getDoc={getDoctorsList}/>}></Route>
    <Route path="/SignUp" exact component={SignUp}></Route>
    <Route path="/Contact" exact component={Contact}></Route>
    <Route path="/UserSignUp" exact component={UserSignUP}></Route>
    <Route path = "/doctors" exact render={(props) => <DoctorConatinerCard doctorsArray={doctors} list={doctors} hospName={nameOfHospital}/>}/>
   </Switch>

  {/* <DoctorConatinerCard /> */}
</div> )
}

export default App;

