import React from 'react';
import './User.css';

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Loren ipsum</p>
      <p>I am {props.username}</p>
      
    </div>
    
  )
};

export default UserOutput