import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EventsContext } from "../../tech/contexts/EventsContext";
import { useContext } from "react";

function ArchiveModal({ show, handleClose, event }) {
  const { handleArchiveEvent } = useContext(EventsContext);

  function handleArchiveButton(eventId) {
    handleArchiveEvent(eventId);
    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Archive list <b>{event.name}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to Archive this list?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={ () => handleArchiveButton(event.id)}>
            Archive
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ArchiveModal;
