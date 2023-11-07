import React from 'react'
import Button from 'react-bootstrap/Button';
function CommonButtions(props) {
   
  return (
    <div>
        <Button style={{ width: '200px',height:'50px', backgroundColor: props.color ||'blue'}} onClick={props.onSubmit}>{props.text}</Button>
    </div>
  )
}

export default CommonButtions;
