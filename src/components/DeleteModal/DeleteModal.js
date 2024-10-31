import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EventsContext } from "../../tech/contexts/EventsContext";
import { useContext } from "react";

function DeleteModal({ show, handleClose, event }) {
  const { handleDeleteEvent } = useContext(EventsContext);

  function handleDeleteButton(eventId) {
    handleDeleteEvent(eventId);
    handleClose();
  }

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
          <Button variant="danger" onClick={() => handleDeleteButton(event.id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
