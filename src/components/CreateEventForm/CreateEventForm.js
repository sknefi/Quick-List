import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CreateEventForm.css";
import { useContext, useState } from "react";
import IconPickerComponent from "../IconPickerComponent/IconPickerComponent";
import { UsersContext } from "../../tech/contexts/UsersContext";
import { EventsContext } from "../../tech/contexts/EventsContext";

function CreateEventForm({ handleClose }) {
  const { handleAddEvent } = useContext(EventsContext);

  const [newEventName, setNewEventName] = useState("");
  const [newEventIcon, setNewEventIcon] = useState("");
  const { loggedInUser } = useContext(UsersContext);

  const createEvent = (name, icon) => {
    return {
      name: name,
      members: [loggedInUser.id],
      owner: loggedInUser.id,
      archived: false,
      icon: icon,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEvent = createEvent(newEventName, newEventIcon);
    handleAddEvent(newEvent);
    handleClose();
  };

  return (
    <Form onSubmit={handleSubmit} className="create-list-form">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name yours new list</Form.Label>
        <Form.Control
          type="text"
          placeholder="List name"
          onBlur={(e) => setNewEventName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicIcon">
        <Form.Label>Icon for yours new list</Form.Label>
        <Form.Control
          type="icon"
          placeholder="Icon"
          onBlur={(e) => setNewEventIcon(e.target.value)}
        />
      </Form.Group>
      {/* <IconPickerComponent/> */}
      <Button
        variant="primary"
        type="submit"
        className="button-create-list-form"
      >
        Submit
      </Button>
    </Form>
  );
}

export default CreateEventForm;
