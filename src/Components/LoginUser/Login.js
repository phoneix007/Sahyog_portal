import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Style from './LoginUser.module.css'
const LoginUser = (props) => {
  return (
      <div className={Style.Login}>
    <Form>
      <FormGroup>
        <Label for="exampleEmail" >Email</Label>
        <Input type="email" name="email" id="Email" placeholder="Email" />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      {' '}
      <Button className={Style.btn}>Log In</Button>
    </Form>
    </div>
  );
}
export default LoginUser;