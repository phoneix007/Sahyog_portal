import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import "./List.css";
import {FaBed} from "react-icons/fa";
import {BsPeopleFill} from "react-icons/bs";
import axios from './../../axios_data'
let card_details = [1,2,3,4,5,6]

 

const reqData = async() => {
    await axios.get('https://sahyog-da8a6-default-rtdb.firebaseio.com/Hospitals.json').then(resp => {
      // Object.assign(Hospitals, {key3: "value3"});
      const data = resp.data.hospital.name
      card_details = data
      console.log(card_details)
   }).catch(err => {
     console.log(err)
   })
}

const updatedData = ["PRASAD HOSPITAL", "Hans foundation", "Sivananda Charitable Hospital", "MATESHWARI GENERAL HOSPITAL", "All India Institute of Medical Science Rishikesh", "All India Institute of Medical Sciences", "Ayush Department", "Kandari Hospital", "Puri Sanjivani Hospital", "Uttaranchal Heart Care Centre - Heart Hospital in Rishikesh", "Swastik Eye Hospital Rishikesh", "Government Ayurvedic Hospital", "Lakhda hospital", "Sandhu Hospital", "Joshi Hospital", "Government Veterinary Hospital Rishikesh", "Rishikesh Ayurveda", "SETHI hospital and maternity centre (Dr. A K Sethi & Dr. Vandana Sethi)", "NATIONAL SKIN CLINIC & LASER CENTER", "Lathkind lab"]
const updateData = () => {
  axios.put('https://sahyog-da8a6-default-rtdb.firebaseio.com/Hospitals/hospital.json' ,{
    name:updatedData
  } )
  .then(res => {
    console.log(res , res.data)
  })
}

const Cards = card_details.map((el , index) => {
  return(
    <div className="col-md-4 card_column">
      <Card key={index}>
        <CardImg top width="100%" src="https://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-jumbo.jpg?quality=90&auto=webphttps://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-jumbo.jpg?quality=90&auto=webp" alt="None" />
        <CardBody>
          <CardTitle tag="h5">Hospital Name</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Location</CardSubtitle>
          <CardText>
            Hostpital info....vghjkj fghjh gfdsj hgf dsdfghjkjhg fdsdfghjuiu ytrertyui okijhgfdf ghjkmjnbv cxcv bnm,mnhgvc
          </CardText>
          <div className="hospital_points_section">
            <div className="point1"><FaBed /> Beds</div>
            <div className="point2"><BsPeopleFill /> Doctors</div>
          </div>
        </CardBody>
      </Card>
  </div>
  )
});

const List = (props) => {
      return (
        <div className="container">
          <div className='row'>
            {/* {reqData()} */}
            {Cards}
          </div>
        </div>
      );
    }; 
export default List;
