const { BASE_URL, config } = require('../helper.test');
const Ajv = require('ajv');
const ajv = new Ajv();

describe('Event - Update', () => {
  test('should return the updated event on success', async () => {
    const updateData = {
      name: "Updated Event",
      members: ["674450c8e2f3f5cbcf033fff", "674450c8e2f3f5cbcf033ccc"],
      items: [
        { name: "Updated Item", state: "done" },
        { name: "Another Item", state: "pending" }
      ],
      owner: "674450c8e2f3f5cbcf033aaa",
      icon: "b",
      archived: false
    };

    const response = await fetch(
      `${BASE_URL}/event/update?id=675d6a3873f7fc06d772f430`,
      {
        ...config,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...config.headers },
        body: JSON.stringify(updateData)
      }
    );

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toMatchObject(updateData); // Verify that the updated event matches the input
  });

  test('should return 400 for invalid input schema', async () => {
    const invalidData = {
      name: "Invalid Event",
      members: "not-an-array", // Invalid type
      items: []
    };

    const response = await fetch(
      `${BASE_URL}/event/update?id=675d6a3873f7fc06d772f430`,
      {
        ...config,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...config.headers },
        body: JSON.stringify(invalidData)
      }
    );

    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toHaveProperty('code', 'dtoInIsNotValid');
    expect(data).toHaveProperty('validationError');
  });

  test('should return 404 for non-existent event', async () => {
    const updateData = {
      name: "Non-existent Event",
      members: ["674450c8e2f3f5cbcf033fff"],
      items: [{ name: "Item", state: "pending" }],
      owner: "674450c8e2f3f5cbcf033aaa",
      icon: "x",
      archived: false
    };

    const response = await fetch(
      `${BASE_URL}/event/update?id=675d6a3873f7fc06d77fffff`,
      {
        ...config,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...config.headers },
        body: JSON.stringify(updateData)
      }
    );

    expect(response.status).toBe(404);
    const data = await response.json();
    expect(data).toHaveProperty('code', 'eventNotFound');
  });

});
