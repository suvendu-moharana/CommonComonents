
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';


function CommonModal(props) {
   
    return (
        <div>
        
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{props.content}</p>
                </Modal.Body>
                <Modal.Footer>
           
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CommonModal;