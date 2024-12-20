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
import EventMembersModal from "../EventMembersModal/EventMembersModal";
import AddMembersModal from "../AddMembersModal/AddMembersModal";
import ChangeEventNameModal from "../ChangeEventNameModal/ChangeEventNameModal";
import LeaveEventModal from "../LeaveEventModal/LeaveEventModal";

function ShowOptions({ event }) {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UsersContext);

  const [showBtnDelete, setShowBtnDelete] = useState(false);
  const [showBtnArchive, setShowBtnArchive] = useState(false);
  const [showBtnMembers, setShowBtnMembers] = useState(false);
  const [showBtnAddMembers, setShowBtnAddMembers] = useState(false);
  const [showBtnChangeEventName, setShowBtnChangeEventName] = useState(false);
  const [showBtnLeaveEvent, setShowBtnLeaveEvent] = useState(false);

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
        {event.owner === loggedInUser._id && (
          <Dropdown.Item
            className="settings-text"
            onClick={() => setShowBtnChangeEventName(true)}
          >
            Change name of list
          </Dropdown.Item>
        )}
        {event.owner === loggedInUser._id && (
          <Dropdown.Item
            className="settings-text"
            onClick={() => setShowBtnAddMembers(true)}
          >
            Add members
          </Dropdown.Item>
        )}
        <Dropdown.Item
          className="settings-text"
          onClick={() => setShowBtnMembers(true)}
        >
          Show members
        </Dropdown.Item>
        {event.owner !== loggedInUser._id && (
          <Dropdown.Item
            className="settings-text"
            onClick={() => setShowBtnLeaveEvent(true)}
          >
            Leave list
          </Dropdown.Item>
        )}
        {loggedInUser._id === event.owner && (
          <Dropdown.Item
            onClick={() => setShowBtnArchive(true)}
            className="settings-buttons"
          >
            <FaFileArchive />
          </Dropdown.Item>
        )}
        {loggedInUser._id === event.owner && (
          <Dropdown.Item
            onClick={() => setShowBtnDelete(true)}
            className="settings-buttons"
          >
            <FaTrash />
          </Dropdown.Item>
        )}
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
      <EventMembersModal
        handleClose={() => setShowBtnMembers(false)}
        show={showBtnMembers}
        event={event}
      />
      <AddMembersModal
        handleClose={() => setShowBtnAddMembers(false)}
        show={showBtnAddMembers}
        event={event}
      />
      <ChangeEventNameModal
        handleClose={() => setShowBtnChangeEventName(false)}
        show={showBtnChangeEventName}
        event={event}
      />
      <LeaveEventModal
        handleClose={() => setShowBtnLeaveEvent(false)}
        show={showBtnLeaveEvent}
        event={event}
      />
    </Dropdown>
  );
}

export default ShowOptions;
