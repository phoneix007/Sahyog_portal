import React from 'react';
import {IoMdPin} from 'react-icons/io'
import {BsPeopleFill} from 'react-icons/bs'
import {FaBed} from 'react-icons/fa'
import {RiPinDistanceFill} from 'react-icons/ri'
import Style from './List.module.css'
import {
  Card, CardImg, CardText, CardBody,
  CardGroup,CardTitle, CardSubtitle, Button
} from 'reactstrap';
const List = (props) => {
      return (
        // 
      <div className="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="..."/>
      <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

      );
    }; 
export default List;
// className={Style.cardContainer}