import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteModal({ show, handleClose, event }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Delete list <b>{event.name}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete this list?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
