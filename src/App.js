import React from 'react'
import Style from './App.module.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
// import HospitalList from './Containers/HospitalList/HospitalList'
// import Inputfields from './Components/InputFields/InputFields'
import Main from './Components/Jumbotron/Jumbotron'
// import SignUp from './Containers/SignUpHospital/Signup'
import List from './Components/HospitalList/List'


const App = () =>(
<div>
  {/* HeadLine */}
  <div className={Style.Headline}>
  <img src={`${process.env.PUBLIC_URL}/Assets/Logo.jpeg`} style={{
    height : "7rem",
  }}/></div>
  <Header/>
  {/* <Main/> */}
  {/* <SignUp /> */}
   <List/>
  <Footer/>
</div>
)

export default App;
