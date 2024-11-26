import React, { useContext, useState } from "react";
import { ListGroup, Form, Button } from "react-bootstrap";
import "./ShowItems.css";
import { FaTrash } from "react-icons/fa";
import { EventsContext } from "../../tech/contexts/EventsContext";

const ShowItems = ({ items, event }) => {
	const { deleteItem, changeItemState  } = useContext(EventsContext);
	// console.log(items)
  return (
    <div className="show-items">
      <ListGroup>
        {items.map(
          (item) =>
            // musí tu byť kontrola či existuje item, inak sa v komponente ItemsProvider
            // pri zmazaní itemu (deleteItem) pri filtrácii (.filter) prepíše vymazaná
            // hodnata na undefinied
            item && (
              <ListGroup.Item key={item.id} className="item-div">
                <Form.Check
                  type="checkbox"
                  checked={item.state === "done"}
                  onChange={() => changeItemState(event.id, item.id)}
                  label={item.name}
                  className="item-text"
                />
                <FaTrash
                  onClick={() => deleteItem(event.id, item.id)}
                  className="icon-trash"
                />
              </ListGroup.Item>
            )
        )}
      </ListGroup>
    </div>
  );
};

export default ShowItems;
