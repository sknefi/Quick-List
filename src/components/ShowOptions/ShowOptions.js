import Dropdown from "react-bootstrap/Dropdown";
import ArchiveModal from "../ArchiveModal/ArchiveModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import { IoIosSettings } from "react-icons/io";
import { useContext, useState } from "react";
import "./ShowOptions.css";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { FaFileArchive } from "react-icons/fa";
import { UsersContext } from "../../tech/contexts/UsersContext";

function ShowOptions({ event }) {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UsersContext);
  const [showBtnDelete, setShowBtnDelete] = useState(false);
  const [showBtnArchive, setShowBtnArchive] = useState(false);

  function handleDeleteButton() {
    setShowBtnDelete(false);
    navigate("/");
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        <IoIosSettings className="icon-settings" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {event.owner === loggedInUser.id && (
          <Dropdown.Item className="settings-text">Change name of list</Dropdown.Item>
        )}
        {event.owner === loggedInUser.id && (
          <Dropdown.Item className="settings-text">Add members</Dropdown.Item>
        )}
        <Dropdown.Item className="settings-text">Show members</Dropdown.Item>
        <Dropdown.Item
          onClick={() => setShowBtnArchive(true)}
          className="settings-buttons"
        >
          <FaFileArchive />
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => setShowBtnDelete(true)}
          className="settings-buttons"
        >
          <FaTrash />
        </Dropdown.Item>
      </Dropdown.Menu>
      <ArchiveModal
        event={event}
        handleClose={() => setShowBtnArchive(false)}
        show={showBtnArchive}
      />
      <DeleteModal
        event={event}
        handleClose={handleDeleteButton}
        show={showBtnDelete}
      />
    </Dropdown>
  );
}

export default ShowOptions;
