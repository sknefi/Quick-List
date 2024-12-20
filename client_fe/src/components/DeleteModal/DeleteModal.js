import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EventsContext } from "../../tech/contexts/EventsContext";
import { useContext } from "react";
import { TranslationContext } from "../../tech/contexts/TranslationContext";

function DeleteModal({ show, handleClose, event }) {
  const { handleDeleteEvent } = useContext(EventsContext);
  const { t } = useContext(TranslationContext);

  function handleDeleteButton(eventId) {
    handleDeleteEvent(eventId);
    handleClose();
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
