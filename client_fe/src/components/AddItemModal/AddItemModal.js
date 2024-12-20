import Modal from "react-bootstrap/Modal";
import AddItemForm from "../AddItemForm/AddItemForm";
import { useContext } from "react";
import { TranslationContext } from "../../tech/contexts/TranslationContext";

function AddItemModal({ show, handleClose, eventId }) {
	const {t} = useContext(TranslationContext)
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t.modalAddItemTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddItemForm handleClose={handleClose} eventId={eventId} />
      </Modal.Body>
    </Modal>
  );
}

export default AddItemModal;
