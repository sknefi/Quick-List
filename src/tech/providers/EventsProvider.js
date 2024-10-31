import React, { useState } from "react";

import { EventsContext } from "../contexts/EventsContext";

const EventsProvider = ({ children }) => {
  // fetch na EventsList
  const [allEvents, setAllEvents] = useState([
    {
      id: "81f0ba2765c2fd8e89d604c0fb7be123",
      name: "Fruits",
      members: [
        "04f0ba2765c2fd8e89d604c0fb7f6bae",
        "c13b6c6e17b749735950c09e41bd8449",
      ],
      owner: "04f0ba2765c2fd8e89d604c0fb7f6bae",
      archived: false,
      icon: "🍩",
    },
    {
      id: "141eea2765c2fd8e89d604c0fb7b0919",
      name: "Pets",
      members: ["04f0ba2765c2fd8e89d604c0fb7f6bae"],
      owner: "04f0ba2765c2fd8e89d604c0fb7f6bae",
      archived: true,
      icon: "🐻",
    },
    {
      id: "edc1b6c6e17b749735950c09e41bdaaeb",
      name: "Groceries",
      members: [
        "04f0ba2765c2fd8e89d604c0fb7f6bae",
        "8b2b893648d34fcc16a46abaf5ed3639",
        "c13b6c6e17b749735950c09e41bd8449",
      ],
      owner: "8b2b893648d34fcc16a46abaf5ed3639",
      archived: true,
      icon: "🏙️",
    },
    {
      id: "ce01b6c6e17b749735950c09e41bde012",
      name: "Random",
      members: [],
      owner: "8b2b893648d34fcc16a46abaf5ed3639",
      icon: "◎",
      archived: false,
    },
  ]);

  // nastavuje status archivovaniu eventov (sú/nie sú archivované)
  const [statusArchived, setStatusArchived] = useState(true);

  // premenná, ktorá sa posiela do handlerMapy a posiela tam buď všetky eventy alebo iba tie vyfiltrované
  const [events, setEvents] = useState(allEvents);

  // určuje, ktoré eventy sa majú zobraziť
  function displayArchived(x) {
    if (x) {
      return setEvents(allEvents);
    } else {
      return setEvents(allEvents.filter((event) => !event.archived));
    }
  }

  function handleAddEvent(event) {
    setAllEvents((current) => {
      const newEvents = [...allEvents, event];
      if (statusArchived) {
        setEvents(newEvents);
      } else {
        setEvents(newEvents.filter((event) => !event.archived));
      }
      return newEvents;
    });
  }

  const handlerMap = {
    events: events,
    displayArchived: displayArchived,
    statusArchivedMap: {
      statusArchived: statusArchived,
      setStatusArchived: setStatusArchived,
    },
    handleAddEvent: handleAddEvent,
  };

  return (
    <EventsContext.Provider value={handlerMap}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsProvider;
