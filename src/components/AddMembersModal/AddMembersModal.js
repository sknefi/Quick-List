import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { UsersContext } from "../../tech/contexts/UsersContext";
import DisplayMembersAdd from "../DisplayMembersAdd/DisplayMembersAdd";

function AddMembersModal({ show, handleClose, event }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add new members to list <b>{event.name}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DisplayMembersAdd event={event}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddMembersModal;
