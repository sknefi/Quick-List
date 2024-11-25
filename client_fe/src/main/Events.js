import React, { useContext } from "react";
import { EventsContext } from "../tech/contexts/EventsContext";
import { UsersContext } from "../tech/contexts/UsersContext";
import EventCard from "../components/EventCard/EventCard";
import AppTools from "./AppTools";
import "./Events.css";

const AppBody = () => {
  // pre event kartičky
  const { events } = useContext(EventsContext);
  // pre zobrazenie archive/delete buttnu na karticke
  const { loggedInUser } = useContext(UsersContext);
  const loggedInUserEvents =  events.filter((event) => event.members.includes(loggedInUser.id))

  return (
    <div>
      <AppTools />
      <div className="events">
        {loggedInUserEvents.map((event, index) => {
          return (
            <EventCard key={index} event={event} loggedInUser={loggedInUser} />
          );
        })}
      </div>
    </div>
  );
};

export default AppBody;
