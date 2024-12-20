import ListGroup from "react-bootstrap/ListGroup";
import { UsersContext } from "../../tech/contexts/UsersContext";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import "./DisplayMembers.css";
import { EventsContext } from "../../tech/contexts/EventsContext";

function DisplayMembers({ eventMembers, eventOwner, eventId }) {
  const { loggedInUser } = useContext(UsersContext);
  const { handleRemoveUserFromEvent } = useContext(EventsContext);
  return (
    <ListGroup>
      {eventMembers.map((user) => {
        return (
          <ListGroup.Item key={user._id} className="display-members-div">
            {user.name}
            {loggedInUser._id === eventOwner && loggedInUser._id !== user._id && (
              <FaTrash
                onClick={() => handleRemoveUserFromEvent(user._id, eventId)}
              />
            )}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default DisplayMembers;
