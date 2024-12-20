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
  const { loggedInUser } = useContext(UsersContext);

  const createEvent = (name, icon) => {
    // musím vygenerovať dočasné ID, pretože keď mažem a archivujem potrebujem 
    // mať id eventu (listu), inak by sa zmazali/zarchivovali všetky čo sú novovytvorené
    const tempId = Math.random().toString(36) + Date.now().toString(36);
	const newEvent = {
		name: name,
		members: [loggedInUser._id],
		owner: loggedInUser._id,
		items: [],
		archived: false,
		icon: icon,
		_id: tempId,
	  }
	  console.log(newEvent)
    return { ...newEvent };
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
        <Form.Label>{t.modalCreateName}</Form.Label>
        <Form.Control
          type="text"
          placeholder={t.modalChangeTitle}
          onBlur={(e) => setNewEventName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicIcon">
        <Form.Label>{t.modalCreateIcon}</Form.Label>
        <Form.Control
          type="icon"
          placeholder={t.icon}
          onBlur={(e) => setNewEventIcon(e.target.value)}
        />
      </Form.Group>
      {/* <IconPickerComponent/> */}
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
