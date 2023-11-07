import React, { useEffect, useState } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UserApi() {
  const [myData, setMyData] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUserData, setEditedUserData] = useState({});

  const handleEditChange = (e) => {
    setEditedUserData({...editedUserData,[e.target.name]:e.target.value});
  };

  const handleEditClick = (userId) => {
    setSelectedUser(userId);
    const userToEdit = myData.find(user => user.id === userId);
    setEditedUserData(userToEdit);
    setShowEditModal(true);
  };

  useEffect(() => {
   
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        //console.log(res.data);
        setMyData(res.data);
        setShowEditModal(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleSaveClick = () => {
   
    axios.put(`https://jsonplaceholder.typicode.com/users/${selectedUser}`, editedUserData)
      .then((res) => {

        const updatedData = myData.map((user) => {
          if (user.id === selectedUser) {
            return { ...user, ...editedUserData };
          }
          return user;
        });
      setMyData(updatedData);
      setShowEditModal(false);
      
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
  };
  const handleDelete=(userId)=>{
    
    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => {
      console.log(res);
      const updatedData = myData.filter(user => user.id !== userId);
      setMyData(updatedData);
     
      setShowEditModal(false);
    })
    .catch((error) => {
      console.error('Error deleting user:', error);
    
    });
};

  return (

    <div>
      <h5 style={{ width: '50%' }}>Showing User info in Below Table </h5>
      <Table striped bordered hover size="dark" style={{ width: '50%' }}>

        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Edite</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myData.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td><Button variant="info"onClick={() => handleEditClick(user.id)}>
                    Edit
                  </Button></td>
                  <td><Button variant="danger" onClick={() => handleDelete(user.id)}>
                    Delete
                  </Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input
              type="name"
              name="name"
              value={editedUserData.name}
              onChange={handleEditChange}
              />
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="username"
                name="username"
                value={editedUserData.username}
                onChange={handleEditChange}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={editedUserData.email}
                onChange={handleEditChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSaveClick}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserApi;
