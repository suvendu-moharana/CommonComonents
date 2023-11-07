import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

function UserForm() {
  const [inputData, setInputData] = useState({ email: '', password: '' });
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [editData, setEditData] = useState({ email: '', password: '' });
  const [search, setSearch] = useState({ email: '', password: '' });

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(data[index]);
    openModal();
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedData = [...data];
    updatedData[editIndex] = { ...editData };
    setData(updatedData);
    setModalIsOpen(false);
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, inputData]);
    setInputData({ email: '', password: '' });
  };

  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  const handleSearch = (e) => {
    setSearch({...search,[e.target.name]:e.target.value});
  };

  const filteredData = data.filter((item) =>
    item.email.toLowerCase().includes(search.email.toLowerCase())&&
    item.password.toLowerCase().includes(search.password.toLowerCase())
  );

  return (
    <div>
      <Form onSubmit={handleSubmit} style={{ width: '50%' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={inputData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={inputData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <h4>Showing submitted data</h4>
      </Form>

      <Form >
        <Form.Group controlId="searchBar" style={{ width: '50%' }}>
          <Form.Label >Search Email:</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Search by Email"
            value={search.email}
            onChange={handleSearch}
          />
        </Form.Group>
        </Form>
        <Form >
        <Form.Group controlId="searchBar" style={{ width: '50%' }}>
          <Form.Label >Search password:</Form.Label>
          <Form.Control
            type="text"
            name="password"
            placeholder="Search by password"
            value={search.password}
            onChange={handleSearch}
          />
        </Form.Group>
      </Form>
      
      <Table striped bordered hover size="dark" style={{ width: '50%' }}>
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        {filteredData.length > 0 &&
          filteredData.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td>{1 + index}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </td>
                <td>
                  <Button variant="info" onClick={() => handleEdit(index)}>
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
      </Table>

      <Modal show={modalIsOpen} onHide={() => setModalIsOpen(false)} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <Form.Group controlId="editEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editData.email}
                onChange={handleEditChange}
              />
            </Form.Group>

            <Form.Group controlId="editPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={editData.password}
                onChange={handleEditChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UserForm;
