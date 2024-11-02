import Dropdown from "react-bootstrap/Dropdown";
import { FaUsers } from "react-icons/fa";
import { UsersContext } from "../../tech/contexts/UsersContext";
import { useContext } from "react";

function ShowUsers() {
  const { handleChangeLoggedInUser, users } = useContext(UsersContext);
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <FaUsers style={{ fontSize: "2rem", color: "white" }} />{" "}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {users.map((user) => {
          return (
            <Dropdown.Item onClick={() => handleChangeLoggedInUser(user.id)}>
              {user.name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ShowUsers;
