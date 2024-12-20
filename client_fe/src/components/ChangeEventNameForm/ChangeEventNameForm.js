import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { EventsContext } from "../../tech/contexts/EventsContext";
import { TranslationContext } from "../../tech/contexts/TranslationContext";

const ChangeEventNameForm = ({ event, handleClose }) => {
  const { t } = useContext(TranslationContext);
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
        <Form.Label>{t.changeNameOfList}</Form.Label>
        <Form.Control
          type="text"
          placeholder={t.modalChangeTitle}
          onChange={(e) => setNewEventName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicIcon">
        <Form.Label>{t.changeIconOfList	}</Form.Label>
        <Form.Control
          type="text"
          placeholder={t.modalChangeIcon}
          value={newEventIcon}
          onChange={(e) => setNewEventIcon(e.target.value)}
        />
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
};

export default ChangeEventNameForm;
