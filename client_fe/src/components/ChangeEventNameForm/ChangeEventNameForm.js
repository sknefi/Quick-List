import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { EventsContext } from "../../tech/contexts/EventsContext";

const ChangeEventNameForm = ({ event, handleClose }) => {
  const { handleChangeEventName } = useContext(EventsContext);

  const [newEventName, setNewEventName] = useState("");
  const [newEventIcon, setNewEventIcon] = useState(event.icon);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleChangeEventName(event._id, newEventName, newEventIcon);
    handleClose();
  };
  return (
    <Form onSubmit={handleSubmit} className="create-list-form">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name for list</Form.Label>
        <Form.Control
          type="text"
          placeholder="List name"
          onChange={(e) => setNewEventName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicIcon">
        <Form.Label>Icon for list</Form.Label>
        <Form.Control
          type="text"
          placeholder="Icon"
          value={newEventIcon}
          onChange={(e) => setNewEventIcon(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="button-create-list-form"
      >
        Submit
      </Button>
    </Form>
  );
};

export default ChangeEventNameForm;
