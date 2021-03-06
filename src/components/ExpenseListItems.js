import React from 'react';
import {Link} from 'react-router-dom'

 const ExpenseListItems = ({description,id, amount, createAt}) => (
  <div>
  <Link to={`/edit/${id}`}><h3>{description}</h3></Link>  
    <p>{amount} - {createAt}</p>
  </div>
 );
 export default ExpenseListItems;