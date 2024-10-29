import React, { useState } from "react";
import { ListGroup, Form, Button } from "react-bootstrap";

const ShowItems = () => {
  const [items, setItems] = useState([
    {
      id: "it1",
      name: "Banan",
      state: "done",
    },
    {
      id: "it2",
      name: "Horalka",
      state: "pending",
    },
    {
      id: "it3",
      name: "Klobasa",
      state: "pending",
    },
  ]);

  // Toggle state between "done" and "pending"
  const toggleState = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id
        ? { ...item, state: item.state === "pending" ? "done" : "pending" }
        : item
    );
    setItems(updatedItems);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <ListGroup>
        {items.map((item) => (
          <ListGroup.Item key={item.id}>
            <Form.Check
              type="checkbox"
              checked={item.state === "done"}
              onChange={() => toggleState(item.id)}
              label={item.name}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button variant="primary" className="mt-3">
        Add Item
      </Button>
    </div>
  );
};

export default ShowItems;
