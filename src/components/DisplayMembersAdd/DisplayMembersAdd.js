import ListGroup from "react-bootstrap/ListGroup";
import { useContext } from "react";
import { UsersContext } from "../../tech/contexts/UsersContext";
import { TiUserAdd } from "react-icons/ti";
import "./DisplayMembersAdd.css";
import { EventsContext } from "../../tech/contexts/EventsContext";

function DisplayMembersAdd({ event }) {
  const { users, loggedInUser } = useContext(UsersContext);
  const { handleAddUserForEvent } = useContext(EventsContext);

  return (
    <ListGroup>
      {users.map((user) => {
        const isMember = event.members.includes(user.id);
        return (
          <ListGroup.Item
            action={!isMember}
            disabled={isMember}
            className="add-members-div"
            key={user.id}
          >
            {user.name}
            {user.id !== loggedInUser.id && !isMember && (
              <TiUserAdd
                className="icon-add-user"
                onClick={() => handleAddUserForEvent(user.id, event.id)}
              />
            )}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default DisplayMembersAdd;
