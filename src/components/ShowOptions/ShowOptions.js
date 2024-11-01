import Dropdown from "react-bootstrap/Dropdown";
import ArchiveModal from "../ArchiveModal/ArchiveModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import { IoIosSettings } from "react-icons/io";
import { useState } from "react";
import "./ShowOptions.css";

function ShowOptions({ event }) {
  const [showBtnDelete, setShowBtnDelete] = useState(false);
  const [showBtnArchive, setShowBtnArchive] = useState(false);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        <IoIosSettings className="icon-settings" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Change name of list</Dropdown.Item>
        <Dropdown.Item>Show members</Dropdown.Item>
        <Dropdown.Item onClick={() => setShowBtnArchive(true)}>a</Dropdown.Item>
        <Dropdown.Item onClick={() => setShowBtnDelete(true)}>b</Dropdown.Item>
      </Dropdown.Menu>
      <ArchiveModal
        event={event}
        handleClose={() => setShowBtnArchive(false)}
        show={showBtnArchive}
      />
      <DeleteModal
        event={event}
        handleClose={() => setShowBtnDelete(false)}
        show={showBtnDelete}
      />
    </Dropdown>
  );
}

export default ShowOptions;
