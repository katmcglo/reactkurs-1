import React from 'react';

const UserInput = (props) => {
  const style = {
    border: '2px solid green',
    backgroundColor: 'grey'
  }
  return (
    <input type="text" onChange={props.changed} value={props.currentName} style={style} />
  )
};

export default UserInput