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

function roleGuard(requiredPermission) {
  return async (req, res, next) => {
    const { user, eventId } = req.body; // Assume `req.eventId` is provided.
    if (!user || !eventId) {
      return res.status(403).json({
        code: "accessDenied",
        message: "Unable to determine user role.",
      });
    }

    try {
      const event = await EventModel.findById(eventId);

      if (!event) {
        return res.status(403).json({
          code: "accessDenied",
          message: "Event not found.",
        });
      }
      let userRole = "nonMember";
      if (event.ownerId === user.id) {
        userRole = "owner";
      } else if (event.members.includes(user.id)) {
        userRole = "member";
      }

      // Check permissions
      if (
        profiles[userRole] &&
        profiles[userRole].canAccess.includes(requiredPermission)
      ) {
        return next(); // Authorized
      }

      // If not authorized
      res.status(403).json({
        code: "accessDenied",
        message: "You do not have permission to perform this action.",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        code: "serverError",
        message: "An error occurred while verifying permissions.",
      });
    }
  };
}

module.exports = { roleGuard };
