import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Style from './Signup.module.css'
const SignUp = (props) => {
  return (
    <Form className= {`${Style.Form} container`}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="UserName">Hospital Id</Label>
            <Input type="text" name="name" id="UserId" placeholder="Hospital Id" required=""/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="password" name="password" id="Password" placeholder="Password" required=""/>
          </FormGroup>
        </Col>
      </Row>
      <Row>
      <Col md={12}>
          <FormGroup>
            <Label for="HospitalName">Hospital Name </Label>
            <Input type="text" name="HospitalName" id="HospitalName" placeholder="Hospital Name"/>
          </FormGroup>
        </Col>  
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Hospital Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="e.g 1234 Main St"/>
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

      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="examplebed">Current Availability of Beds</Label>
            <Input type="number" name="bed" id="examplebed"/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampledoctor">Current Availability of Doctors</Label>
            <Input type="number" name="doctor" id="exampledoctor"/>
          </FormGroup>
        </Col>
      </Row>
      <button type="button" style={{background: "#077563",height:"50px",width:"100px"}} class="btn btn-primary btn-lg">Register</button>
    </Form>
  );
}

export default SignUp;