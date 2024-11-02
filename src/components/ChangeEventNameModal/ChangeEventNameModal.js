import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EventsContext } from "../../tech/contexts/EventsContext";
import { useContext } from "react";
import ChangeEventNameForm from "../ChangeEventNameForm/ChangeEventNameForm";

function ChangeEventNameModal({ show, handleClose, event }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Change name of list <b>{event.name}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChangeEventNameForm event={event} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ChangeEventNameModal;
