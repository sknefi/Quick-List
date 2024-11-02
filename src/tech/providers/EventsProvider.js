import React, { useContext, useState } from "react";

import { EventsContext } from "../contexts/EventsContext";
import { UsersContext } from "../contexts/UsersContext";

const EventsProvider = ({ children }) => {
  const { users } = useContext(UsersContext);

  // fetch na EventsList
  const [allEvents, setAllEvents] = useState([
    {
      id: "81f0ba2765c2fd8e89d604c0fb7be123",
      name: "Fruits",
      members: [
        "04f0ba2765c2fd8e89d604c0fb7f6bae",
        "c13b6c6e17b749735950c09e41bd8449",
      ],
      items: ["it1", "it2", "it3"],
      owner: "04f0ba2765c2fd8e89d604c0fb7f6bae",
      archived: false,
      icon: "🍩",
    },
    {
      id: "141eea2765c2fd8e89d604c0fb7b0919",
      name: "Pets",
      members: [
        "04f0ba2765c2fd8e89d604c0fb7f6bae",
        "lnxzklcnqiwj319ioafksnlzans",
      ],
      owner: "04f0ba2765c2fd8e89d604c0fb7f6bae",
      archived: true,
      items: ["it10", "it6", "it9"],
      icon: "🐻",
    },
    {
      id: "edc1b6c6e17b749735950c09e41bdaaeb",
      name: "Groceries",
      members: [
        "04f0ba2765c2fd8e89d604c0fb7f6bae",
        "8b2b893648d34fcc16a46abaf5ed3639",
        "c13b6c6e17b749735950c09e41bd8449",
        "paisjdkn1o23j1jaspokn"
      ],
      items: ["it5", "it7", "it8"],
      owner: "8b2b893648d34fcc16a46abaf5ed3639",
      archived: true,
      icon: "🏙️",
    },
    {
      id: "ce01b6c6e17b749735950c09e41bde012",
      name: "Random",
      members: ["8b2b893648d34fcc16a46abaf5ed3639"],
      owner: "8b2b893648d34fcc16a46abaf5ed3639",
      icon: "◎",
      items: ["it4"],
      archived: false,
    },
    {
      id: "80f0ba2765c2fd8e89d604c0fb7beasdq",
      name: "Vegetables",
      members: [
        "04f0ba2765c2fd8e89d604c0fb7f6bae",
        "lnxzklcnqiwj319ioafksnlzans",
        "paisjdkn1o23j1jaspokn",
        "8b2b893648d34fcc16a46abaf5ed3639"
      ],
      items: ["it10", "it11", "it12"],
      owner: "paisjdkn1o23j1jaspokn",
      archived: false,
      icon: "💲",
    },
    {
      id: "81f0ba2765c2fd8e89d604c0fb7asdjqbe123po",
      name: "Washing",
      members: [
        "04f0ba2765c2fd8e89d604c0fb7f6bae",
        "c13b6c6e17b749735950c09e41bd8449",
        "lnxzklcnqiwj319ioafksnlzans",
        "8b2b893648d34fcc16a46abaf5ed3639"
      ],
      items: ["it13", "it14"],
      owner: "lnxzklcnqiwj319ioafksnlzans",
      archived: true,
      icon: "🥁",
    },
    {
      id: "811231f0ba2765c2fd8e89d604c0fb7be1zxckl23",
      name: "Bakery",
      members: [
        "04f0ba2765c2fd8e89d604c0fb7f6bae",
        "c13b6c6e17b749735950c09e41bd8449",
        "lnxzklcnqiwj319ioafksnlzans",
        "paisjdkn1o23j1jaspokn"
      ],
      items: ["it15", "it16", "it17"],
      owner: "04f0ba2765c2fd8e89d604c0fb7f6bae",
      archived: true,
      icon: "⛹🏿",
    },
  ]);

  // nastavuje status archivovaniu eventov (sú/nie sú archivované)
  const [statusArchived, setStatusArchived] = useState(true);

  // premenná, ktorá sa posiela do handlerMapy a posiela tam buď všetky eventy alebo iba tie vyfiltrované
  const [events, setEvents] = useState(allEvents);

  // určuje, ktoré eventy sa majú zobraziť
  function displayArchived(status) {
    if (status) {
      return setEvents(allEvents);
    } else {
      return setEvents(allEvents.filter((event) => !event.archived));
    }
  }

  // pridá event k ostatným eventom
  function handleAddEvent(event) {
    setAllEvents(() => {
      const newEvents = [...allEvents, event];

      // ak je zapnutá ikonka oko - show archived
      if (statusArchived) {
        setEvents(newEvents);
      } else {
        setEvents(newEvents.filter((event) => !event.archived));
      }
      // console.log("events: " + events);
      return newEvents;
    });
    // console.log("ALLevents: " + allEvents);
  }

  // zarchivuje event
  function handleArchiveEvent(eventId) {
    setAllEvents(() => {
      const newEvents = allEvents.map((event) =>
        event.id === eventId ? { ...event, archived: true } : event
      );

      // ak je zapnutá ikonka oko - show archived
      if (statusArchived) {
        setEvents(newEvents);
      } else {
        setEvents(newEvents.filter((event) => !event.archived));
      }
      return newEvents;
    });
  }

  // vymaže event
  function handleDeleteEvent(eventId) {
    setAllEvents(() => {
      const newEvents = allEvents.filter((event) => event.id !== eventId);

      // ak je zapnutá ikonka oko - show archived
      if (statusArchived) {
        setEvents(newEvents);
      } else {
        setEvents(newEvents.filter((event) => !event.archived));
      }
      return newEvents;
    });
  }

  // pridá id itemu do event.items
  function handleAddItemToEvent(eventId, itemId) {
    setAllEvents((currentEvents) => {
      const newEvents = currentEvents.map((event) => {
        if (event.id === eventId) {
          return { ...event, items: [...event.items, itemId] };
        }
        return event;
      });

      setEvents(
        statusArchived
          ? newEvents
          : newEvents.filter((event) => !event.archived)
      );

      return newEvents;
    });
  }

  // vráti všetkých memberov v danom evente
  function handleGetEventMembers(event) {
    const eventMembers = event.members.map((memberId) =>
      users.find((user) => user.id === memberId)
    );
    return eventMembers;
  }

  // pridá user id do listu event.members pre daný event
  function handleAddUserForEvent(userId, eventId) {
    const changedEvent = allEvents.map((event) => {
      if (event.id === eventId) {
        event.members.push(userId);
      }
      return event;
    });
    setAllEvents(changedEvent);
  }

  // odstráni userové id z listu event.members z daného eventu
  function handleRemoveUserFromEvent(userId, eventId) {
    const changedEvents = allEvents.map((event) => {
      if (event.id === eventId) {
        event.members = event.members.filter((memberId) => memberId !== userId);
      }
      return event;
    });
    setAllEvents(changedEvents);
  }

  // zmení meno eventu
  function handleChangeEventName(eventId, newName, newIcon) {
    const changedEvents = allEvents.map((event) => {
      if (event.id === eventId) {
        event.name = newName;
        event.icon = newIcon;
      }
      return event;
    });
    setAllEvents(changedEvents);
  }

  function handleLeaveList(eventId, userId) {
    const changedEvents = allEvents.map((event) => {
      if (event.id === eventId) {
        event.members = event.members.filter((memberId) => memberId !== userId);
      }
      return event;
    });
    setAllEvents(changedEvents);
  }

  const handlerMap = {
    events: events,
    displayArchived: displayArchived,
    statusArchivedMap: {
      statusArchived: statusArchived,
      setStatusArchived: setStatusArchived,
    },
    handleAddEvent: handleAddEvent,
    handleArchiveEvent: handleArchiveEvent,
    handleDeleteEvent: handleDeleteEvent,
    handleAddItemToEvent: handleAddItemToEvent,
    handleGetEventMembers: handleGetEventMembers,
    handleRemoveUserFromEvent: handleRemoveUserFromEvent,
    handleAddUserForEvent: handleAddUserForEvent,
    handleChangeEventName: handleChangeEventName,
    handleLeaveList: handleLeaveList,
  };

  return (
    <EventsContext.Provider value={handlerMap}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsProvider;
