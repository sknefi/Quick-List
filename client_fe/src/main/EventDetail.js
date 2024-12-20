import React, { useContext, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import ShowItems from "../components/ShowItems/ShowItems";
import "./EventDetail.css";
import { useParams } from "react-router-dom";
import { EventsContext } from "../tech/contexts/EventsContext";
import AddItemModal from "../components/AddItemModal/AddItemModal";
import ShowOptions from "../components/ShowOptions/ShowOptions";
import ItemsPieChart from "../components/ItemsPieChart/ItemsPieChart";

const EventDetail = () => {
  const { id } = useParams();
  const { events, getEvent } = useContext(EventsContext);

  const [showAll, setShowAll] = useState(true);
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  const event = getEvent(id);
  // chybné ID v url adrese
  if (!event) {
    return <div>This shopping list doesnt exist</div>;
  }
  const itemsToShow = event.items;

  const items = showAll
    ? itemsToShow
    : itemsToShow.filter((item) => item && item.state === "pending");
  return (
    <div>
      <div className="event-detail">
        <div className="event-info">
          <h2>{event.icon}</h2>
          <h2>{event.name}</h2>
        </div>
        <div className="event-detail-icons">
          {showAll && (
            <IoMdEye
              onClick={() => setShowAll(!showAll)}
              className="event-detail-icon"
            />
          )}
          {!showAll && (
            <IoMdEyeOff
              onClick={() => setShowAll(!showAll)}
              className="event-detail-icon"
            />
          )}
          <IoIosAddCircleOutline
            className="event-detail-icon icon-plus"
            onClick={() => setShowAddItemModal(!showAddItemModal)}
          />
          <ShowOptions event={event} />
        </div>
      </div>
      <div className="items-and-pie">
        <ShowItems items={items} event={event} />
        {event.items.length > 0 && <ItemsPieChart />}
      </div>
      <AddItemModal
        show={showAddItemModal}
        handleClose={() => setShowAddItemModal(false)}
        eventId={event._id}
      />
    </div>
  );
};

export default EventDetail;
