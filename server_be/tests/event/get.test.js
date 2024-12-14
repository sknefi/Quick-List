const { BASE_URL, config } = require("../helper.test");

describe("GET /event", () => {
  test("event exists", async () => {
    const response = await fetch(
      `${BASE_URL}/event/get?id=675da342d9fa61a657a6a5b8`,
      config
    );

    expect(response.status).toBe(200);
  });

  test("event does not exist", async () => {
    const response = await fetch(
      `${BASE_URL}/event/get?id=675d6a3873f7fc06dfffffff`,
      config
    );

    expect(response.status).toBe(404);
  });

  test("missing id", async () => {
    const response = await fetch(`${BASE_URL}/event/get`, config);

    expect(response.status).toBe(400);
  });
});
