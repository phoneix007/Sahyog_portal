import React , {useEffect, useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Style from './LoginUser.module.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config';
import  { Redirect } from 'react-router-dom'
import { browserHistory } from 'react-router';
import {useHistory} from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { LogginUser } from '../../actions/action';
import {NavLink} from 'react-router-dom'
 
const LoginUser = (props) => {
  const [userData, setUserData] = useState({
    email: '',
    password:'',
   });
   const userLoggedIn = useSelector((state) => state.ChangeLogInState);
   const dispatch = useDispatch();
   console.log(userLoggedIn);

   let history = useHistory();
   

   const inputUserHandler = e => {
     const name = e.target.name;
     const value = e.target.value;

     setUserData({
       ...userData, [name]: value
     });
   }
  


   const userLoginHandler = async(e) => {
     try{
        const user = await signInWithEmailAndPassword(auth , userData.email , userData.password )
        console.log(user.user.email);
        localStorage.setItem('email' , user.user.email);
        dispatch(LogginUser());
        alert(`you are logged in`);
        history.push('/Main');

     }
     catch ( error ){
       console.log(error.message);
       alert('error occur while trying to login')
     }
   }

  return (
      <div className={Style.Login}>
    <Form>
      
      <FormGroup>
        <Label for="exampleEmail" >Email</Label>
        <Input type="email" name="email" id="Email" placeholder="Email" value={userData.email} onChange={inputUserHandler} />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword"> Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" value={userData.password} onChange={inputUserHandler} />
      </FormGroup>

      <Button className={Style.btn} onClick={userLoginHandler }>Log In</Button>
      <Button className={Style.btn} onClick={() => history.push('/UserSignUp')}>SignUp</Button> 
    </Form>
    </div>
  )
}
export default LoginUser;