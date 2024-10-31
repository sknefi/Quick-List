import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CreateEventForm from "../CreateEventForm/CreateEventForm";

function CreateEventModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create new list</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateEventForm handleClose={handleClose}/>
      </Modal.Body>
    </Modal>
  );
}

export default CreateEventModal;
