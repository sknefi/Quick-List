import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { UsersContext } from "../../tech/contexts/UsersContext";
import DisplayMembersAdd from "../DisplayMembersAdd/DisplayMembersAdd";
import { TranslationContext } from "../../tech/contexts/TranslationContext";

function AddMembersModal({ show, handleClose, event }) {
  const { t } = useContext(TranslationContext);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {t.modalAddNewMembers} <b>{event.name}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DisplayMembersAdd event={event} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddMembersModal;
