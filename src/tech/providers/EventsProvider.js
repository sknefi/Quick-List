import React, { useState } from "react";

import { EventsContext } from "../contexts/EventsContext";

const EventsProvider = ({ children }) => {
  const [allEvents, setAllEvents] = useState([
    {
      id: "81f0ba2765c2fd8e89d604c0fb7be123",
      name: "Fruits",
      members: [
        "04f0ba2765c2fd8e89d604c0fb7f6bae",
        "c13b6c6e17b749735950c09e41bd8449",
      ],
      owner: "04f0ba2765c2fd8e89d604c0fb7f6bae",
      icon: "🍩"
    },
    {
      id: "141eea2765c2fd8e89d604c0fb7b0919",
      name: "Pets",
      members: ["04f0ba2765c2fd8e89d604c0fb7f6bae"],
      owner: "04f0ba2765c2fd8e89d604c0fb7f6bae",
      icon: "🐻"
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
      icon: "🏙️"
    },
    {
      id: "ce01b6c6e17b749735950c09e41bde012",
      name: "Random",
      members: [],
      owner: "8b2b893648d34fcc16a46abaf5ed3639",
      icon: "◎"
    },
  ]);
  const hanlderMap = {
    events: allEvents,
  };
  return (
    <EventsContext.Provider value={hanlderMap}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsProvider;
