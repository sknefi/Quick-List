import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EventsContext } from "../../tech/contexts/EventsContext";
import { useContext } from "react";
import { TranslationContext } from "../../tech/contexts/TranslationContext";

function ArchiveModal({ show, handleClose, event }) {
	const {t} = useContext(TranslationContext);
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
            {t.modalArchiveTitle} <b>{event.name}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{t.modalArchiveText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t.close}
          </Button>
          <Button variant="primary" onClick={ () => handleArchiveButton(event._id)}>
            {t.archive}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ArchiveModal;
