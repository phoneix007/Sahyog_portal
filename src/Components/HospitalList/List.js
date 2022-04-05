import React , {useState , useEffect} from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody 
} from 'reactstrap';
import "./List.css";
import {FaBed} from "react-icons/fa";
import {BsPeopleFill} from "react-icons/bs";
import axios from 'axios';

import {NavLink} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Modal } from "react-bootstrap";

// const unsplash_accessKey = 'MzYEU_kws1WlR8yIF_7BqcG4MrHsn2L9IByTqEKBY1o';
const List = (props) => {
  let [hostpitals , setHospitals] = useState([]);
  
  const [show, setShow] = useState(false);

  useEffect( () => {
     const getdata = async() => {
      const response = await axios.get('https://sahyogdatabase-default-rtdb.firebaseio.com/hospitals.json');
      let hospitals_from_firebase = (response.data['-Mz3Zn3uF7pV2bza4b2P']);
      hospitals_from_firebase.sort((a , b) => b['ratings'] - a['ratings']);
      // console.log(hospitals_from_firebase)
      setHospitals(hospitals_from_firebase);
     }
    getdata();    
  },[]);

    
  const Cards = hostpitals.map((el , index) => {

    return(   
      <div className="col-md-4 card_column card">
        <Card key={index}>
          <CardImg top width="100%" src=" https://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-jumbo.jpg?quality=90&auto=webphttps://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-jumbo.jpg?quality=90&auto=webp" alt="None"/>
          <CardBody>
            <CardTitle tag="h5">{el.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Revari</CardSubtitle>
            <CardText>
              Hostpital info....
            </CardText>
            <div className="hospital_points_section">
              <div className="point1"><FaBed /> {`${el.beds} Beds`}</div>
              <NavLink to="/doctors"><div className="point2"  onClick={props.getDoc.bind(el , el.doctors , el.name)}><BsPeopleFill /> {`${el.doctors.length} Total Doctors`}</div></NavLink>
              <div className="point3"><BsPeopleFill /> {`${el.ratings} Ratings`}</div>
            </div>
          </CardBody>
        </Card>
    </div>
    )
  });
  
      return (
        <div className="container">
          <div className='row'>
            {Cards}
          </div>
        </div>
      );
    };



//  const compare = (listInDatabase , listByGoogleApi) => {
//       const finalHospitalsList = [];
//       listInDatabase.forEach(el => {
//            if(listByGoogleApi.includes(el['name'])){
//              finalHospitalsList.push(el);
//            }
//       })
//        return finalHospitalsList;
//     }
// const lb = [{name: 'hospital 1'}, {name:'hospital 2' },  {name:'hospital 3' } ,  {name:'hospital 4' },  {name:'hospital 5' }, {name:'hospital 6' }];

// const ga = ['hospital 3', 'hospital 4' , 'hospital 5' ,'hospital 100' ];

// const fin = compare(lb , ga);
// console.log(fin); 




export default List;


// https://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-jumbo.jpg?quality=90&auto=webphttps://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-jumbo.jpg?quality=90&auto=webp