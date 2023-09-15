import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { axiosRes } from '../api/axiosDefaults';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function CategoryDeleteModal({ id }) {
    const[show, setShow] = useState(false);
    const history = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`category/${id}`);
            history.push("/categorieslist");
            handleClose();
            window.location.reload();
        } catch(err) {
            console.log(err);
        }
    };
  return (
    <>
        <Button className="btn btn-danger mr-2" onClick={handleShow}>
        <i className="fas fa-trash-alt" />
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Warning!</Modal.Title>
          </Modal.Header>
          <Modal.Body>You are about to delete your Category!!!</Modal.Body>
          <Modal.Body>By deleting this Category, you will delete all Tasks associated with it</Modal.Body>
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
  )
}

export default CategoryDeleteModal