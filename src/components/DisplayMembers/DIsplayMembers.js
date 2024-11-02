import ListGroup from "react-bootstrap/ListGroup";
import { UsersContext } from "../../tech/contexts/UsersContext";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import "./DisplayMembers.css";
import { EventsContext } from "../../tech/contexts/EventsContext";

function DisplayMembers({ eventMembers, eventOwner, eventId }) {
  const { loggedInUser } = useContext(UsersContext);
  const { handleRemoveUserFromEvent } = useContext(EventsContext);
  console.log(eventMembers);
  return (
    <ListGroup>
      {eventMembers.map((user) => {
        return (
          <ListGroup.Item key={user.id} className="display-members-div">
            {user.name}
            {loggedInUser.id === eventOwner && loggedInUser.id !== user.id && (
              <FaTrash
                onClick={() => handleRemoveUserFromEvent(user.id, eventId)}
              />
            )}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default DisplayMembers;
