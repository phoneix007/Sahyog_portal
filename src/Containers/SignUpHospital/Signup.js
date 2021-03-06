import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Style from './Signup.module.css'
import axios from './../../axios_data'

const SignUp = (props) => {

  const fake = async (data) => {

     await axios.post('https://sahyogdatabase-default-rtdb.firebaseio.com/Hospitals.json' , data)
  }

 const setValues = async (event) => {
   event.preventDefault()
    const Data = {
    UserName : document.getElementById('UserName').value,
    Password : document.getElementById('Password').value,
    HospitalName : document.getElementById('HospitalName').value,
    Address : document.getElementById('Address').value,
    Address2 : document.getElementById('Address2').value,
    City : document.getElementById('City').value,
    State : document.getElementById('State').value,
    Zip : document.getElementById('Zip').value
  }
  let validation = true; 
  const validationData = Object.values(Data)

   
 for(let x in validationData ){
   if(validationData[x] === ''){
    validation = false;
    break;
   }
 }
 console.log(validation)
  if(validation === false){
    alert('All the fields are mandatory');
    return;
  }
  else{
    fake(Data);
    await axios.post('https://sahyogportal-mp2-default-rtdb.firebaseio.com/SignUp.json' , Data)
    alert('Data Saved Succesfully');
  }
  
 } 

 // adding bed also to firebase.
  return (
    <Form className= {`${Style.Form} container`}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="UserName">User Name</Label>
            <Input type="text" name="name" id="UserName" placeholder="User Name" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="password" name="password" id="Password" placeholder="Password"/>
          </FormGroup>
        </Col>
      </Row>
      <Row>
      <Col md={12}>
          <FormGroup>
            <Label for="HospitalName">Hospital Name </Label>
            <Input type="text" name="HospitalName" id="HospitalName" placeholder="Name"/>
          </FormGroup>
        </Col>  
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="Address" placeholder="1234 Main St"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="Address2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="City"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="State"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="Zip"/>
          </FormGroup>  
        </Col>
      </Row>
      <Button className={Style.btn} type="submit" onClick ={setValues}>Create An Account</Button>
    </Form>
  );
}

export default SignUp;
