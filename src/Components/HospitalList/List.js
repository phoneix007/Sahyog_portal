import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import "./List.css";
import {FaBed} from "react-icons/fa";
import {BsPeopleFill} from "react-icons/bs";
const card_details = [1,2,3,4,5,6]

const Cards = card_details.map(() => {
  return(
    <div className="col-md-4 card_column">
      <Card>
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
            {Cards}
          </div>
        </div>
      );
    }; 
export default List;
