import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoctorsInfo from './DoctorsCard';

const DoctorConatinerCard = (props) => {
      return (
          props.doctorsArray.map((doc) => {
              return <DoctorsInfo key={new Date()} hospitalName={props.hospName} speciality={doc.speciality} name={doc.name}/>
          })
      )
}


export default DoctorConatinerCard;