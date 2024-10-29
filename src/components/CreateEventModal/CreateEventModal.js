import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CreateEventForm from "../CreateEventForm/CreateEventForm";

function StaticExample({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Pridať list</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateEventForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StaticExample;
