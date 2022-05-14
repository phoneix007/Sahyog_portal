import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Style from './SignUpUser.module.css';
import axios from 'axios';
import {
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useHistory } from "react-router-dom";
import { auth } from '../../config'
import {send} from 'emailjs-com';
import { useSelector , useDispatch } from 'react-redux';
import { LogginUser } from '../../actions/action';
import { getDatabase, ref, set } from "firebase/database";


const SERVICE_ID = 'service_i9ckz5t';
const TEMPLATE_ID = 'template_66awqal';
const USER_ID = 'GpE3RvCixvRb591Pg';

const SignUpUser = (props) => { 
  const isUser= useSelector(state => state.ChangeLogInState);
   const dispatch = useDispatch();
  const [userSignupData , setUserData] = useState({
    userName:'',
    email: '',
    password:'', 
  });

  const history = useHistory();

  const userSignupHandler = e => {
    const name = e.target.name; 
    const value = e.target.value; 
    setUserData({...userSignupData, [name]: value});
  }
  const postDataHandler = async () => {
    
     const userData = userSignupData;
     const toSend = {
      from_name: 'Sahyog Portal Team',
      to_name:  'New User',
      message: 'Sahyog Portal Team Welcomes You',
      reply_to: userData.email,
      };

     // automatically log you in
     try{
     const currentUser = await createUserWithEmailAndPassword(auth , userData.email , userData.password);
     await axios.post('https://sahyogportal-mp2-default-rtdb.firebaseio.com/UserSignUp.json' ,{...userData , uid: currentUser.user.uid});
     alert('saving your data And Redirecting you');
    //  setDataToFirebase(currentUser.user.uid , userData.userName , userData.email);
     dispatch(LogginUser()); 
     localStorage.setItem('email' , userData.email);
     console.log(localStorage.getItem('email'));
     history.push('/Main');

     send(
      SERVICE_ID,
      TEMPLATE_ID,
      toSend,
      USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

     } catch(error){
       console.log(error.message);
       alert('Error Occure while storing')
     }  
  }

  // Need for sign out 
    const sign_Out = async () => {
      await signOut(auth);
    }  

  return (
      <div className={Style.Login}>
    <Form>

    <FormGroup>
        <Label for="userName">UserName</Label>
        <Input type="text" name="userName" placeholder="Username" value={userSignupData.userName} onChange={userSignupHandler} />
      </FormGroup>

      <FormGroup>
        <Label for="email" >Email</Label>
        <Input type="email" name="email" id="Email" placeholder="Email"  value={userSignupData.email} onChange={userSignupHandler}/>
      </FormGroup>
     
      <FormGroup>
        <Label for="Password"> Set Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Set Password" value={userSignupData.password} onChange={userSignupHandler}/>
      </FormGroup>
   
      <Button className={Style.btn} onClick={postDataHandler}>Sign Up</Button>
    </Form>
    </div>
  );
}
export default SignUpUser;

// auth.currentUser user that logged in
//auth.currentUser.email

// onAuthStateChanged fn that fire every time when something changed in auth state.
// user?.email if user has email then show else do nothing

// onAuthStateChanged , signOut need to import from firebase/auth
// onAuthStateChanged(auth , (currentUser) => {
    
// })