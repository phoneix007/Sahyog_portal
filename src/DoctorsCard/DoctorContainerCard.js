import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoctorsInfo from './DoctorsCard';

  
const DoctorConatinerCard = (props) => {
  const arr = [];
 
  for (const x in  props.doctorsArray){
    arr.push({...props.doctorsArray[x]});
  }
  console.log(arr);
    return (
        <div className="container">
        <div className='row'>
        { arr.map(docSpec => <DoctorsInfo doctors={docSpec} hospName={props.hospName}/> )}
        </div>
        </div>
    )
}


export default DoctorConatinerCard;