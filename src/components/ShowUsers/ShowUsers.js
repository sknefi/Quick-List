import Dropdown from "react-bootstrap/Dropdown";
import { FaUsers } from "react-icons/fa";

function ShowUsers() {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <FaUsers style={{ fontSize: "2rem", color: "white"}} />{" "}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ShowUsers;
