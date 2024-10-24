import React, { useState, useTransition } from "react";

import { UsersContext } from "../contexts/UsersContext";

const UsersProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([
    {
      name: "admin",
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
      name: "John",
      surname: "Doe",
      email: "johndoe@example.com",
      photo: "a",
      id: "c13b6c6e17b749735950c09e41bd8449",
    },
  ]);

  const [loggedInUser, setLoggedInUser] = useState({
    name: "admin",
    surname: "adminovic",
    email: "admin@admin.admin",
    id: "04f0ba2765c2fd8e89d604c0fb7f6bae",
    photo: "",
  });

  const hanlderMap = {
    users: allUsers,
    loggedInUser: loggedInUser
  };
  return (
    <UsersContext.Provider value={hanlderMap}>{children}</UsersContext.Provider>
  );
};

export default UsersProvider;
