import React, { useState, useTransition } from "react";

import { UsersContext } from "../contexts/UsersContext";

const UsersProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([
    {
      name: "Filip",
      surname: "admin",
      email: "admin@admin.admin",
      _id: "674467bece726a70feda359c",
      photo: "",
    },
    {
      _id: "6765909496db20088e754f95",
      name: "David",
      surname: "Brown",
      email: "david@example.com",
      photo: "david.jpg",
    },
    {
      name: "TK24",
      surname: "Bey",
      email: "tkcko@example.com",
      photo: "a",
      _id: "6765908596db20088e754f89",
    },
    {
      name: "Vlada",
      surname: "Maskos",
      email: "vladimirus@example.com",
      photo: "a",
      _id: "6765907696db20088e754f7d",
    },
  ]);

  const [loggedInUser, setLoggedInUser] = useState({
	name: "Filip",
	surname: "admin",
	email: "admin@admin.admin",
	_id: "674467bece726a70feda359c",
	photo: "",
  });

  function handleChangeLoggedInUser(userId) {
    const newUser = allUsers.find((user) => user._id === userId);
    setLoggedInUser(newUser);
  }

  const hanlderMap = {
    users: allUsers,
    loggedInUser: loggedInUser,
    handleChangeLoggedInUser: handleChangeLoggedInUser,
  };
  return (
    <UsersContext.Provider value={hanlderMap}>{children}</UsersContext.Provider>
  );
};

export default UsersProvider;
