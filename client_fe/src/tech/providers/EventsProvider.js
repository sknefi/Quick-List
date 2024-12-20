import React, { useContext, useEffect, useState } from "react";

import { EventsContext } from "../contexts/EventsContext";
import { UsersContext } from "../contexts/UsersContext";
import {
  getEventsSC,
  updateEventSC,
  deleteEventSC,
  createEventSC,
} from "../serverCalls/event-serverCalls";

const EventsProvider = ({ children }) => {
  const { users } = useContext(UsersContext);

  // fetch na EventsList
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getEventsSC();
      if (eventsData.state === "success") {
        setAllEvents(eventsData.events);
        setEvents(eventsData.events);
      } else {
      }
    };

    fetchEvents();
  }, []);

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
  async function handleAddEvent(event) {
	const res = await createEventSC(event);
	if (res.state !== "success") return;
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
  async function handleArchiveEvent(eventId) {
    const event = getEvent(eventId);
    const res = await updateEventSC({ ...event, archived: true });
    if (res.state !== "success") return;
    setAllEvents(() => {
      const newEvents = allEvents.map((event) =>
        event._id === eventId ? { ...event, archived: true } : event
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
  async function handleDeleteEvent(eventId) {
    const res = await deleteEventSC(eventId);
    if (res.state !== "success") return;
    setAllEvents(() => {
      const newEvents = allEvents.filter((event) => event._id !== eventId);

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

  // memeber opustí event
  function handleLeaveList(eventId, userId) {
    const changedEvents = allEvents.map((event) => {
      if (event.id === eventId) {
        event.members = event.members.filter((memberId) => memberId !== userId);
      }
      return event;
    });
    setAllEvents(changedEvents);
  }

  // vymaže item z eventu
  function deleteItem(eventId, itemId) {
    setAllEvents((currentEvents) => {
      const newEvents = currentEvents.map((event) => {
        if (event.id === eventId) {
          return {
            ...event,
            items: event.items.filter((item) => item.id !== itemId),
          };
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

  // odškrtne políčko a nastaví stav
  function changeItemState(eventId, itemId) {
    setAllEvents((currentEvents) => {
      const newEvents = currentEvents.map((event) => {
        if (event.id === eventId) {
          return {
            ...event,
            items: event.items.map((item) =>
              item.id === itemId
                ? {
                    ...item,
                    state: item.state === "pending" ? "done" : "pending",
                  }
                : item
            ),
          };
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

  // vráti event podľa id (eventDetaily)
  function getEvent(eventId) {
    return allEvents.find((event) => event._id === eventId);
  }

  // pridá item do event.items
  function handleAddItemToItems(eventId, newItem) {
    setAllEvents((currentEvents) => {
      const newEvents = currentEvents.map((event) => {
        if (event.id === eventId) {
          return { ...event, items: [...event.items, newItem] };
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

  const handlerMap = {
    allEvents,
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
    deleteItem: deleteItem,
    changeItemState: changeItemState,
    getEvent: getEvent,
    handleAddItemToItems: handleAddItemToItems,
  };

  return (
    <EventsContext.Provider value={handlerMap}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsProvider;
