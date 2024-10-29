import React, { useContext } from "react";
import { EventsContext } from "../tech/contexts/EventsContext";
import { UsersContext } from "../tech/contexts/UsersContext";
import EventCard from "../components/EventCard/EventCard";
import "./Events.css";

const AppBody = () => {
  const { events } = useContext(EventsContext);
  const { loggedInUser } = useContext(UsersContext);

  return (
    <div className="events">
      {events.map((event) => {
        return (
          <EventCard key={event.id} event={event} loggedInUser={loggedInUser} />
        );
      })}
    </div>
  );
};

export default AppBody;
