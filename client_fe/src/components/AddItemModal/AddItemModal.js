import Modal from "react-bootstrap/Modal";
import AddItemForm from "../AddItemForm/AddItemForm";

function AddItemModal({ show, handleClose, eventId }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddItemForm handleClose={handleClose} eventId={eventId} />
      </Modal.Body>
    </Modal>
  );
}

export default AddItemModal;
