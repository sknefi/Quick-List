const { BASE_URL, config } = require("../helper.test");
const Ajv = require("ajv");
const ajv = new Ajv();

describe("Event - Delete", () => {
  test("should successfully delete an existing event", async () => {
    const validEventId = "675da35fd9fa61a657a6a5d3"; // Replace with an actual valid ID in your test DB

    const response = await fetch(
      `${BASE_URL}/event/delete?id=${validEventId}`,
      {
        ...config,
        method: "DELETE",
      }
    );

    expect(response.status).toBe(200);
  });

  test("should return 404 for non-existent event", async () => {
    const nonExistentEventId = "971250c8e2f3f5cbcfffffff"; // Replace with an ID not in your test DB

    const response = await fetch(
      `${BASE_URL}/event/delete?id=${nonExistentEventId}`,
      {
        ...config,
        method: "DELETE",
      }
    );

    expect(response.status).toBe(404);
    const data = await response.json();

    expect(data).toMatchObject({
      code: "eventNotFound",
      message: `event ${nonExistentEventId} not found`,
    });
  });

  test("should return 400 when id is missing", async () => {
    const response = await fetch(`${BASE_URL}/event/delete`, {
      ...config,
      method: "DELETE",
    });

    expect(response.status).toBe(400);
    const data = await response.json();

    expect(data).toMatchObject({
      code: "dtoInIsNotValid",
      message: "dto in is not valid"
    });
  });
});
