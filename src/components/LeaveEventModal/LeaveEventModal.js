import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EventsContext } from "../../tech/contexts/EventsContext";
import { useContext } from "react";
import { UsersContext } from "../../tech/contexts/UsersContext";
import { useNavigate } from "react-router-dom";

function LeaveEventModal({ show, handleClose, event }) {
  const navigate = useNavigate();
  const { handleLeaveList } = useContext(EventsContext);
  const { loggedInUser } = useContext(UsersContext);

  function handleClick() {
    handleLeaveList(event.id, loggedInUser.id);
    handleClose();
    navigate("/");
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Leave list <b>{event.name}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to leave this list?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClick}>
            Leave
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LeaveEventModal;
