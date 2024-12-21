import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EventsContext } from "../../tech/contexts/EventsContext";
import { useContext } from "react";
import { TranslationContext } from "../../tech/contexts/TranslationContext";
import { useNavigate } from "react-router-dom";

function DeleteModal({ show, handleClose, event }) {
  const navigate = useNavigate();
  const { handleDeleteEvent } = useContext(EventsContext);
  const { t } = useContext(TranslationContext);

  function handleDeleteButton(eventId) {
    handleDeleteEvent(eventId);
    handleClose();
    navigate("/");
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {t.modalDeleteTitle} <b>{event.name}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{t.modalDeleteText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t.close}
          </Button>
          <Button
            variant="danger"
            onClick={() => handleDeleteButton(event._id)}
          >
            {t.delete}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
