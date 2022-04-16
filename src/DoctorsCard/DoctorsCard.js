import React , {useState } from 'react';
import { useHistory } from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Style from './doctor.module.css'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import axios from 'axios'

const DoctorsInfo = (props) => {
  const [isBooked , setIsBooked] = useState(false);
  const history = useHistory()
  const hospitalName = props.hospName;
  const arr = [];
  let spec ='';
  for ( const x in props.doctors){
      arr.push({...props.doctors[x]});
      spec = props.doctors[x].Specialization 
  }
 
  const url = 'https://sahyogportal-mp2-default-rtdb.firebaseio.com/Hospital_Details/';

  const seatBooked = async (docName , timing) => {
    try{
      const seats = await axios.get(`${url}${hospitalName}/Doctor Details/${spec}/${docName}/DoctorTiming/${timing}/Seats.json`);
      await axios.patch(`${url}${hospitalName}/Doctor Details/${spec}/${docName}/DoctorTiming/${timing}.json`, {
        Seats: (parseInt(seats.data) - 1)     
      });
      history.push('/List');
      console.log(`${url}${hospitalName}/Doctor Details/${spec}/${docName}/DoctorTiming/${timing}/Seats.json`);
      alert(`Your seat is booked , Slot Timing is ${timing}`);
    }
    catch(e){
      console.log(e.message);
      console.log(`${url}${hospitalName}/${spec}/${docName}/DoctorTiming/${timing}.json`);
    }
  }

  const showDocTiming = (timingObj , docName) => {
    const timingArr = [];
    for(const x in timingObj){
      timingArr.push({...timingObj[x]});
    }
    return (
        timingArr.map(i => <Dropdown.Item className={Style.item} 
        onClick={seatBooked.bind(i , docName , i.Timing)} >
        {i.Timing} , <span className={Style.beds}> Seats : {i.Seats}</span>
         </Dropdown.Item>)
    )
  }
  
    return (
        <div className="col-md-4 card_column card">
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>SPECILIZATION:{spec}</Card.Title>
            <Card.Text>
            
            </Card.Text>
          </Card.Body>
        <ListGroup  as="ol" numbered className="list-group-flush">
         {arr.map((doc) => {
            return  ( 
             <>
            <ListGroup.Item as="li">
             <Dropdown as={ButtonGroup}>
              <Button variant="success">{doc.DoctorName}</Button>
              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
               <Dropdown.Menu>
                 {
                  showDocTiming(doc.DoctorTiming , doc.DoctorName)
                 }
              </Dropdown.Menu>
            </Dropdown>
            </ListGroup.Item>
           
            {/* <hr></hr> */}
            </>        
            )
         })}
       </ListGroup>
         <Card.Body>     
      </Card.Body>
       </Card>
       </div>
    )
    
}

export default DoctorsInfo;


// return (
//     <div className="card" key={new Date()}>
//        <h5 className="card-header">{props.hospitalName}</h5>
//        <div className="card-body">
//        <h5 className="card-title">{props.speciality}</h5>
//        <p className="card-text">{props.name}</p>
//        <button className="btn btn-primary">{props.timings}</button>
//        </div>
//     </div>
// )