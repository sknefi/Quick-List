const { BASE_URL, config } = require("../helper.test");
const Ajv = require("ajv");

describe("Event - create", () => {
  test("should return the created event on success", async () => {
    const createData = {
      name: "New Event123",
      members: ["674450c8e2f3f5cbcf033fff", "674450c8e2f3f5cbcf033ccc"],
      items: [
        { name: "New Item", state: "done" },
        { name: "Another Item", state: "pending" },
      ],
      owner: "674450c8e2f3f5cbcf033aaa",
      icon: "a",
      archived: false,
    };

    const response = await fetch(`${BASE_URL}/event/create`, {
      ...config,
      method: "POST",
      headers: { "Content-Type": "application/json", ...config.headers },
      body: JSON.stringify(createData),
    });

    expect(response.status).toBe(201);
    const data = await response.json();
    expect(data).toMatchObject(createData); // Verify that the created event matches the input
  });
  test("should return a 400 error if the input is invalid", async () => {
    const invalidData = {
      name: "Invalid Event",
      members: ["674450c8e2f3f5cbcf033fff"],
      items: [
        { name: "Valid Item", state: "pending" },
        { name: "Invalid Item", state: "invalidState" }, // Invalid state
      ],
      owner: "674450c8e2f3f5cbcf033aaa",
      icon: "a",
      archived: false,
    };

    const response = await fetch(`${BASE_URL}/event/create`, {
      ...config,
      method: "POST",
      headers: { "Content-Type": "application/json", ...config.headers },
      body: JSON.stringify(invalidData),
    });

    expect(response.status).toBe(400);
    const data = await response.json();

    expect(data).toMatchObject({
      code: "dtoInIsNotValid",
      message: "DTO is not valid",
      validationError: [
        {
          instancePath: "/items/1/state", // Adjust to match your actual API output
          keyword: "enum",
          message: "must be equal to one of the allowed values",
          params: {
            allowedValues: ["pending", "done"],
          },
        },
      ],
    });
  });
});
