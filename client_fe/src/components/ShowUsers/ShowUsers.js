import Dropdown from "react-bootstrap/Dropdown";
import { FaUsers } from "react-icons/fa";
import { UsersContext } from "../../tech/contexts/UsersContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function ShowUsers() {
  const navigate = useNavigate();
  const { handleChangeLoggedInUser, users } = useContext(UsersContext);

  function handleClick(userId) {
    handleChangeLoggedInUser(userId);
    navigate("/");
  }
  
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <FaUsers style={{ fontSize: "2rem", color: "white" }} />{" "}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {users.map((user) => {
          return (
            <Dropdown.Item onClick={() => handleClick(user._id)} key={user._id}>
              {user.name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ShowUsers;
