const profiles = {
  owner: {
    canAccess: [
      "addItem",
      "deleteItem",
      "changeEventName",
      "addMembers",
      "archiveEvent",
      "showMembers",
	  
	  "updateEvent",
	  "getEvent",
	  "listEvents",
      "deleteEvent",
      "createEvent",
    ],
  },
  member: {
    canAccess: [
      "addItem",
      "deleteItem",
      "showMembers",
      "leaveEvent",

      "createEvent",
	  "updateEvent",
	  "getEvent",
	  "listEvents",
    ],
  },
  nonMember: {
    canAccess: ["createEvent"],
  },
};

function roleGuard(requiredRole) {
  return (req, res, next) => {

    // I need to implement JWT logic here, THEN I NEED TO DELETE THIS
    if (!req.user || !req.user.role) {
      return next();
    }
	//member
    const userRole = req.user?.role;

    // Check if user role matches the required role
    if (
      profiles[userRole] &&
      profiles[userRole].canAccess.includes(requiredRole)
    ) {
      return next(); // Authorized, proceed to the endpoint
    }

    // If not authorized
    res.status(403).json({
      code: "accessDenied",
      message: "You do not have permission to perform this action.",
    });
  };
}

module.exports = { roleGuard };
