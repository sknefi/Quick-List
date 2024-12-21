import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { EventsContext } from "../../tech/contexts/EventsContext";
import { TranslationContext } from "../../tech/contexts/TranslationContext";

function AddItemForm({ eventId, handleClose }) {
  const { t } = useContext(TranslationContext);
  const { handleAddItemToEvent } = useContext(EventsContext);

  const [newItemName, setNewItemName] = useState("");
  const [error, setError] = useState(""); // State to track validation errors

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Ensure name is not empty
    if (newItemName.trim().length === 0) {
      setError(t.modalAddItemNamePlaceholder || "Item name cannot be empty.");
      return;
    }

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
        <Form.Label>{t.modalAddItemName}</Form.Label>
        <Form.Control
          type="text"
          placeholder={t.modalAddItemNamePlaceholder}
          value={newItemName}
          onChange={(e) => {
            setNewItemName(e.target.value);
            setError(""); // Clear error when user types
          }}
          isInvalid={!!error} // Bootstrap styling for invalid input
        />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="button-create-list-form"
      >
        {t.submit}
      </Button>
    </Form>
  );
}

export default AddItemForm;
