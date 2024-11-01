import React, { useContext, useState } from "react";
import { ListGroup, Form, Button } from "react-bootstrap";
import "./ShowItems.css";
import { FaTrash } from "react-icons/fa";
import { ItemsContext } from "../../tech/contexts/ItemsContext";

const ShowItems = ({ items }) => {
  const { deleteItem, changeItemState } = useContext(ItemsContext);

  return (
    <div className="show-items">
      <ListGroup>
        {items.map((item) => (
          // musí tu byť kontrola či existuje item, inak sa v komponente ItemsProvider 
          //pri zmazaní itemu (deleteItem) pri filtrácii (.filter) prepíše vymazaná 
          //hodnata na undefinied
          item && 
          <ListGroup.Item key={item.id} className="item-div">
            <Form.Check
              type="checkbox"
              checked={item.state === "done"}
              onChange={() => changeItemState(item.id)}
              label={item.name}
              className="item-text"
            />
            <FaTrash onClick={() => deleteItem(item.id)}/>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ShowItems;
