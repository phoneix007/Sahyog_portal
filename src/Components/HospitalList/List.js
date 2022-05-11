import React , {useState , useEffect} from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody 
} from 'reactstrap';
import "./List.css";
import {FaBed} from "react-icons/fa";
import {BsPeopleFill , BsStarFill} from "react-icons/bs";
import axios from 'axios';

import {NavLink , useHistory} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Modal } from "react-bootstrap";
// const unsplash_accessKey = 'MzYEU_kws1WlR8yIF_7BqcG4MrHsn2L9IByTqEKBY1o';

const List = (props) => {
  let [hostpitals , setHospitals] = useState([]);  
  const [getReload, setGetReload] = useState(false);
  const history = useHistory();


  const updateData = async(key) => {
    
    const bedsAvailable = await (await axios.get(`https://sahyogportal-mp2-default-rtdb.firebaseio.com/Hospital_Details/${key}.json`)).data.beds;
    await axios.patch(`https://sahyogportal-mp2-default-rtdb.firebaseio.com/hospitals/${key}.json`, {
      beds: bedsAvailable - 1,
    })
     setGetReload(!getReload);
  }

   const compare = (listInDatabase , listByGoogleApi) => {
      const finalHospitalsList = [];
      listInDatabase.forEach(el => {
           if(listByGoogleApi.includes(el['HospitalName'])){
             finalHospitalsList.push(el);
           }
      })
       return finalHospitalsList;
    }
    
  useEffect( () => {
     const getdata = async() => {

      const response = await axios.get('https://sahyogportal-mp2-default-rtdb.firebaseio.com/Default_Hospitals/-N0UtykrFsgpzEqymrA2/Hospital_Details.json');
      let arr = [];
      for(const key in response.data){
        arr.push({...response.data[key], id: key});
      }
      const liveHospitals = await axios.get('https://sahyogportal-mp2-default-rtdb.firebaseio.com/Hospitals/Live_hospital.json');
       console.log(liveHospitals.data);
      const finalArray = compare(arr , liveHospitals.data);
      finalArray.sort((a , b) => b['HospitalRating'] - a['HospitalRating']);
      setHospitals(finalArray);
      // console.log(arr[0]['Doctor Details']);
     }
     
    getdata();   
  },[getReload]);
  
  const Cards = hostpitals.map((el , index) => {

    return(   
      <div className="col-md-4 card_column card">
        <Card key={el.HospitalName}>
          <CardImg top width="100%" src=" https://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-jumbo.jpg?quality=90&auto=webphttps://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-jumbo.jpg?quality=90&auto=webp" alt="None"/>
          <CardBody>
            <CardTitle tag="h5">{el.HospitalName}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Revari</CardSubtitle>
            <CardText>
              Hostpital info....
            </CardText>
            <div className="hospital_points_section">
              <div className="point1"><FaBed /> {`${el.Beds} Beds`}</div>
              <NavLink to="/doctors"><div className="point2"  onClick={props.getDoc.bind(el , el['Doctor Details'] , el.HospitalName)}><BsPeopleFill /> {`Total Doctors`}</div></NavLink>
              <div className="point3"><BsStarFill /> {`${el.HospitalRating} Ratings`}</div>
              {/* <button className='point4' onClick={() => updateData(el.id)}>Book</button> */}
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




// const lb = [{name: 'hospital 1'}, {name:'hospital 2' },  {name:'hospital 3' } ,  {name:'hospital 4' },  {name:'hospital 5' }, {name:'hospital 6' }];

// const ga = ['hospital 3', 'hospital 4' , 'hospital 5' ,'hospital 100' ];

// const fin = compare(lb , ga);
// console.log(fin); 




export default List;


// https://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-jumbo.jpg?quality=90&auto=webphttps://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-jumbo.jpg?quality=90&auto=webp