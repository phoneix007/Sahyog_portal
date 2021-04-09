import React from 'react';
import {Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Style from './LoginUser.module.css'
const LoginUser = (props) => {
  return (
      <div className={Style.Login}>
    <Form>
      <FormGroup>
        <Label for="exampleId" >Hospital Id</Label>
        <Input type="email" name="email" id="Email" placeholder="Enter Hospital Id" />
      </FormGroup>

      {' '}
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      {' '}
      <button type="button" style={{background: "#077563",height:"40px",width:"100px"}} class="btn btn-primary btn-lg">Log In</button>
    </Form>
    </div>
    
  );
}
export default LoginUser;