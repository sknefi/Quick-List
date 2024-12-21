import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CreateEventForm.css";
import { useContext, useState } from "react";
import { UsersContext } from "../../tech/contexts/UsersContext";
import { EventsContext } from "../../tech/contexts/EventsContext";
import { TranslationContext } from "../../tech/contexts/TranslationContext";

function CreateEventForm({ handleClose }) {
  const { t } = useContext(TranslationContext);
  const { handleAddEvent } = useContext(EventsContext);

  const [newEventName, setNewEventName] = useState("");
  const [newEventIcon, setNewEventIcon] = useState("");
  const [errors, setErrors] = useState({ name: "", icon: "" }); // Track errors for fields
  const { loggedInUser } = useContext(UsersContext);

  const createEvent = (name, icon) => {
    const tempId = Math.random().toString(36) + Date.now().toString(36);
    const newEvent = {
      name: name,
      members: [loggedInUser._id],
      owner: loggedInUser._id,
      items: [],
      archived: false,
      icon: icon,
      _id: tempId,
    };
    console.log(newEvent);
    return { ...newEvent };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Ensure both name and icon are not empty
    const newErrors = {};
    if (newEventName.trim().length === 0) {
      newErrors.name = t.modalCreateName || "Event name cannot be empty.";
    }
    if (newEventIcon.trim().length === 0) {
      newErrors.icon = t.modalCreateIcon || "Event icon cannot be empty.";
    }

    // If errors exist, update state and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newEvent = createEvent(newEventName, newEventIcon);
    handleAddEvent(newEvent);
    handleClose();
  };

  return (
    <Form onSubmit={handleSubmit} className="create-list-form">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>{t.modalCreateName}</Form.Label>
        <Form.Control
          type="text"
          placeholder={t.modalChangeTitle}
          value={newEventName}
          onChange={(e) => {
            setNewEventName(e.target.value);
            setErrors((prev) => ({ ...prev, name: "" })); // Clear name error on change
          }}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicIcon">
        <Form.Label>{t.modalCreateIcon}</Form.Label>
        <Form.Control
          type="text"
          placeholder={t.icon}
          value={newEventIcon}
          onChange={(e) => {
            setNewEventIcon(e.target.value);
            setErrors((prev) => ({ ...prev, icon: "" })); // Clear icon error on change
          }}
          isInvalid={!!errors.icon}
        />
        <Form.Control.Feedback type="invalid">{errors.icon}</Form.Control.Feedback>
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

export default CreateEventForm;
