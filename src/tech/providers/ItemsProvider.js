import React, { useState } from "react";
import { ItemsContext } from "../contexts/ItemsContext";

const ItemsProvider = ({ children }) => {
  // všetky itemy z db, toto ale asi treba vymyslieť inak
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
    {
      id: "it4",
      name: "Stena",
      state: "pending",
    },
    {
      id: "it5",
      name: "Obliecka",
      state: "done",
    },
    {
      id: "it6",
      name: "Stol",
      state: "pending",
    },
    {
      id: "it7",
      name: "Vankus",
      state: "pending",
    },
    {
      id: "it8",
      name: "Postel",
      state: "pending",
    },
    {
      id: "it9",
      name: "Madrac",
      state: "done",
    },
    {
      id: "it10",
      name: "Drevo",
      state: "done",
    },
  ]);

  // getne všetky itemy z konkretneho Listu v detaile
  function getEventItems(event) {
    // console.log(event);
    const eventItems = event.items.map((itemId) =>
      items.find((item) => item.id === itemId)
    );
    return eventItems;
  }

  // odškrtne políčko a nastaví stav
  function changeItemState(itemId) {
    const updatedItems = items.map((item) =>
      item.id === itemId
        ? { ...item, state: item.state === "pending" ? "done" : "pending" }
        : item
    );
    setItems(updatedItems);
    // console.log(items)
  }

  // pridanie noveho itemu k ostatnym
  function handleAddItemToItems(newItem) {
    setItems((curr) => [...curr, newItem]);
    // console.log(items);
  }

  function deleteItem(itemId) {
    const changedItems = items.filter((item) => item.id !== itemId);
    setItems(changedItems);
    // console.log(changedItems);
    // console.log(items);
  }

  const handlerMap = {
    getEventItems: getEventItems,
    changeItemState: changeItemState,
    deleteItem: deleteItem,
    handleAddItemToItems: handleAddItemToItems,
  };
  return (
    <ItemsContext.Provider value={handlerMap}>{children}</ItemsContext.Provider>
  );
};

export default ItemsProvider;
