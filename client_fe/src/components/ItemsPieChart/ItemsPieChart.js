import React, { useState, useEffect, useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useParams } from "react-router-dom";
import { EventsContext } from "../../tech/contexts/EventsContext";

const COLORS = ["#EF767A", "#0077B6"];

const ItemsPieChart = () => {
  const { id } = useParams();
  const { getEvent } = useContext(EventsContext);
  const event = getEvent(id);
  const [data, setData] = useState([]);

  // Use useEffect to update the data state when the event changes
  useEffect(() => {
    if (event) {
      setData([
        {
          name: "Pending",
          value: event.items.filter((item) => item && item.state === "pending")
            .length,
        },
        {
          name: "Done",
          value: event.items.filter((item) => item && item.state === "done")
            .length,
        },
      ]);
    }
  }, [event]);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default ItemsPieChart;
