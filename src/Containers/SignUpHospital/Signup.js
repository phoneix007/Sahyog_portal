import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Style from './Signup.module.css'
const SignUp = (props) => {
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
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
      {/* <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup> */}
      <Button className={Style.btn}>Create An Account</Button>
    </Form>
  );
}

export default SignUp;
