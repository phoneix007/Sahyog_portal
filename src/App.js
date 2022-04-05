import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Style from './App.module.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Main from './Components/Jumbotron/Jumbotron'
import SignUp from './Containers/SignUpHospital/Signup'
import List from './Components/HospitalList/List'
import LoginUser from './Components/LoginUser/Login'
import {Switch , Route} from 'react-router-dom'
import UserSignUP from './Components/SignUpUser/SignUpUser'
import DoctorConatinerCard from './Components/DoctorContainerCard'

const App = () => {

 const [doctors , setDoctors] = useState([]);
 const [nameOfHospital , setNameOfHospital]  = useState('');

 const history = useHistory();
 const getDoctorsList = (docList , hosName) => {
   console.log(docList);
   setDoctors(docList);
   setNameOfHospital(hosName);
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
    <Route path="/UserSignUp" exact component={UserSignUP}></Route>
    <Route path = "/doctors" exact render={(props) => <DoctorConatinerCard doctorsArray={doctors} list={doctors} hospName={nameOfHospital}/>}/>
   </Switch>
  <Footer/>
</div> )
}

export default App;

