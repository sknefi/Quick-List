import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { EventsContext } from "../../tech/contexts/EventsContext";
import DisplayMembers from "../DisplayMembers/DIsplayMembers";

function EventMembersModal({ handleClose, show, event }) {
  const { handleGetEventMembers } = useContext(EventsContext);
  const eventMembers = handleGetEventMembers(event);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Members of list <b>{event.name}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DisplayMembers
            eventMembers={eventMembers}
            eventOwner={event.owner}
            eventId={event.id}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EventMembersModal;
