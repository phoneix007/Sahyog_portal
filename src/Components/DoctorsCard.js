import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const DoctorsInfo = (props) => {

    return (
          <div className="card" key={new Date()}>
             <h5 className="card-header">{props.hospitalName}</h5>
             <div className="card-body">
             <h5 className="card-title">{props.speciality}</h5>
             <p className="card-text">{props.name}</p>
             <button className="btn btn-primary">{props.timings}</button>
             </div>
          </div>
    )
    
}

export default DoctorsInfo;