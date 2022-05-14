import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import axios from 'axios'


const Appointments = () => {

    const [appointments , setAppointments] = useState([]);

    const matchEmail = (el) => {
        return el.name === `${localStorage.getItem('email')}`;
    }

    useEffect(() => {
        const arr = [];
      const getAppointments = async() => {
          const allAppointments =  await axios.get('https://sahyogportal-mp2-default-rtdb.firebaseio.com/Appointments.json');
          console.log(allAppointments.data);
          
          for(const key in allAppointments.data){
            arr.push({...allAppointments.data[key]});
          }
          console.log(arr);
         
      }
      getAppointments();
      setAppointments(arr);   
    }, []);
   
    const yourAppointments = appointments.filter(matchEmail);
    // console.log(appointments);
    return (
        yourAppointments.map(el => {
            return (
                <Card>
                <Card.Header>Your Appointments</Card.Header>
               <Card.Body>
                <Card.Title>{el.Hospital}</Card.Title>
                   <Card.Text>
                    {`
                     Timing : ${el.Timing} , 
                     Doctor's Name: ${el.Doctor}
                    `}
                  </Card.Text>
                </Card.Body>
               </Card>
            )
        })
        
    )
   
}

export default Appointments;

// return (
//     <Card>
//         <Card.Header>Your Appointments</Card.Header>
//         <Card.Body>
//           <Card.Title>{el.Hospital}</Card.Title>
//            <Card.Text>
//               {el.Timing}
//               {el.Doctor}
//           </Card.Text>
//         </Card.Body>
//     </Card>
//     )
//   }