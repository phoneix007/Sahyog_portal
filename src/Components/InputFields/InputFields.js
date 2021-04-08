import React, { useState } from 'react'
import Style from './InputFields.module.css'

const Inputfields = () => {
    // const [value , setValue] = useState('')
    // console.log(value);
    return (
      <div className={Style.Form}>
            <form class="form-inline">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
     </div>
        
        
    )
}

export default Inputfields