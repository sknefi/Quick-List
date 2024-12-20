import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { EventsContext } from "../../tech/contexts/EventsContext";

function AddItemForm({ eventId, handleClose }) {
  const { handleAddItemToEvent } = useContext(EventsContext);

  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempId = Math.random().toString(36) + Date.now().toString(36);
    const newItem = {
      _id: tempId,
      name: newItemName,
      state: "pending",
    };
    handleAddItemToEvent(eventId, newItem);
    handleClose();
  };

  return (
    <Form onSubmit={handleSubmit} className="create-list-form">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name of item</Form.Label>
        <Form.Control
          type="text"
          placeholder="Item name"
          onChange={(e) => setNewItemName(e.target.value)}
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
}

export default AddItemForm;
