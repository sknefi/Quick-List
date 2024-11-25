import React, { useState, useTransition } from "react";

import { UsersContext } from "../contexts/UsersContext";

const UsersProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([
    {
      name: "Filip",
      surname: "admin",
      email: "admin@admin.admin",
      id: "04f0ba2765c2fd8e89d604c0fb7f6bae",
      photo: "",
    },
    {
      id: "8b2b893648d34fcc16a46abaf5ed3639",
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
      id: "paisjdkn1o23j1jaspokn",
    },
    {
      name: "Vlada",
      surname: "Maskos",
      email: "vladimirus@example.com",
      photo: "a",
      id: "lnxzklcnqiwj319ioafksnlzans",
    },
  ]);

  const [loggedInUser, setLoggedInUser] = useState({
    name: "admin",
    surname: "adminovic",
    email: "admin@admin.admin",
    id: "04f0ba2765c2fd8e89d604c0fb7f6bae",
    photo: "",
  });

  function handleChangeLoggedInUser(userId) {
    const newUser = allUsers.find((user) => user.id === userId);
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
