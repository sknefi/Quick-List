import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EventsContext } from "../../tech/contexts/EventsContext";
import { useContext } from "react";
import { UsersContext } from "../../tech/contexts/UsersContext";
import { useNavigate } from "react-router-dom";
import { TranslationContext } from "../../tech/contexts/TranslationContext";

function LeaveEventModal({ show, handleClose, event }) {
  const { t } = useContext(TranslationContext);
  const navigate = useNavigate();
  const { handleLeaveList } = useContext(EventsContext);
  const { loggedInUser } = useContext(UsersContext);

  function handleClick() {
    handleLeaveList(event._id, loggedInUser._id);
    handleClose();
    navigate("/");
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {t.modalLeaveListTitle	} <b>{event.name}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{t.modalLeaveListText	}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t.close}
          </Button>
          <Button variant="warning" onClick={handleClick}>
            {t.leave}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LeaveEventModal;
