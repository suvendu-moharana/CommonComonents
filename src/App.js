import logo from './logo.svg';
import './App.css';
import UserForm from './components/userForm';
import UserApi from './components/userApi';
import CommonButtions from './components/commonComponents/commonButtions';
import CommonModal from './components/commonComponents/commonModal';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CommonTable from './components/commonComponents/CommonTable';
import SelectButton from './components/SelectButton';

function App() {

  // const submitButton = (text) => {
  //   console.log(text);
  // }

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const tableData = [
  //   { id: 1, name: 'John', age: 30 , gender:'male'},
  //   { id: 2, name: 'bikas', age: 25 , gender:'male'},
  //   { id: 3, name: 'arpita', age: 35 , gender:'female'},
  // ];
 

  return (
    <div className="App">

      {/* <UserForm/> */}
      {/* <UserApi/> */}
      {/* <CommonButtions text="mukesh" color="red" onSubmit={() => submitButton("parameter pass")}></CommonButtions> */}

      {/* <Button variant="primary" onClick={handleShow}>
        Open Modals
      </Button>
      <CommonModal
        title="React Bootstrap Modal Example"
        content="This is a simple React Bootstrap modal"
        show={show}
        handleClose={handleClose}
      
      /> */}

{/* <CommonTable  data={tableData} /> */}

        <SelectButton/>
    </div>
  );
}

export default App;
