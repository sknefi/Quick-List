import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ArchiveModal({ show, handleClose, event }) {
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
          <Button variant="primary" onClick={handleClose}>
            Archive
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ArchiveModal;
