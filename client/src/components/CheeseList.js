import React from 'react';
import{ Link } from 'react-router-dom';

const CheeseList = (props) => {
    return(
    <div>
            <Link to={`/cheese/${props.id}`}>{props.name}</Link>
         
      </div>
    )
}

export default CheeseList;