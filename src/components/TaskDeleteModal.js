import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRes } from '../api/axiosDefaults';

function TaskDeleteModal({id}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory()

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/tasks/${id}`);
            history.push("/tasklist/");
        } catch(err) {
            console.log(err);
        }
    };

  
    return (
      <>
        <Button className="btn btn-danger mr-2" onClick={handleShow}>
          Delete
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Warning!</Modal.Title>
          </Modal.Header>
          <Modal.Body>You are about to delete your task</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button className="btn btn-danger mr-2" onClick={handleDelete}>
                Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default TaskDeleteModal