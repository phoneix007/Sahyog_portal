import React , {useState} from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {AiOutlineSearch} from 'react-icons/ai'
import Style from './SearchBar.module.css'
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
    
    const [input, setInput] = useState('')
    //  console.log(input)
    return (
    <form className={Style.Form}>
      <NavLink to="/"><AiOutlineSearch className={Style.Icon} type="submit"/></NavLink>
      <FormGroup className='fluid'>
        <Label for="Search"></Label>
        <Input
          type="text"
          name="Location"
          id="Search"
          placeholder="Location"
          onChange={event => setInput(event.target.value)}
        />
      </FormGroup>
    </form> 
    )
}

export default SearchBar