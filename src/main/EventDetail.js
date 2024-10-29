import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import ShowItems from "../components/ShowItems/ShowItems";
import "./EventDetail.css";

const EventDetail = () => {
  const event = {
    id: "81f0ba2765c2fd8e89d604c0fb7be123",
    name: "Fruits",
    members: [
      "04f0ba2765c2fd8e89d604c0fb7f6bae",
      "c13b6c6e17b749735950c09e41bd8449",
    ],
    items: ["it1", "it2", "it3"],
    owner: "04f0ba2765c2fd8e89d604c0fb7f6bae",
    icon: "🍩",
  };

  // state - {done, pending}
  const items = [
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
  ];

  const [showAll, setShowAll] = useState(true);

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
          <IoIosAddCircleOutline className="event-detail-icon" />
          <IoIosSettings className="event-detail-icon" />
        </div>
      </div>
      <ShowItems items={items}/>
    </div>
  );
};

export default EventDetail;
