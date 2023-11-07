import {useState} from 'react';
import Button from 'react-bootstrap/Button';

function MyButton(){
    const [count,setcount] =useState(0);
    function handleChange(){
        setcount(count+1);
    }
    return(
        <div className='App'>
             <Button variant="success" onClick={handleChange}>
             clicking {count} times.
             </Button>
        </div>
    );
}

function Count(){
    return(
       <div className='App'>
        <h3>Count value</h3>
        <MyButton/>
       </div>
    );
}
export default Count;