import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom'


const DoctorsInfo = (props) => {

    return (
          <div className="card" key={new Date()}>
             <h5 className="card-header">{props.hospitalName}</h5>
             <div className="card-body">
             <h5 className="card-title">{props.speciality}</h5>
             <p className="card-text">{props.name}</p>
             <NavLink  to='#'className="btn btn-primary">{`Timings 9AM to 1 PM `}</NavLink>
             </div>
          </div>
    )
    
}

export default DoctorsInfo;