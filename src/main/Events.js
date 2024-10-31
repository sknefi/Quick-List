import React, { useContext } from "react";
import { EventsContext } from "../tech/contexts/EventsContext";
import { UsersContext } from "../tech/contexts/UsersContext";
import EventCard from "../components/EventCard/EventCard";
import "./Events.css";

const AppBody = () => {
  // pre event kartičky
  const { events } = useContext(EventsContext);
  // pre zobrazenie archive/delete buttnu na karticke
  const { loggedInUser } = useContext(UsersContext);

  return (
    <div className="events">
      {events.map((event, index) => {
        return (
          <EventCard key={index} event={event} loggedInUser={loggedInUser} />
        );
      })}
    </div>
  );
};

export default AppBody;
