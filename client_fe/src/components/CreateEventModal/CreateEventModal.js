import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CreateEventForm from "../CreateEventForm/CreateEventForm";
import { useContext } from "react";
import { TranslationContext } from "../../tech/contexts/TranslationContext";

function CreateEventModal({ show, handleClose }) {
	const { t } = useContext(TranslationContext);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t.modalCreateTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateEventForm handleClose={handleClose}/>
      </Modal.Body>
    </Modal>
  );
}

export default CreateEventModal;
