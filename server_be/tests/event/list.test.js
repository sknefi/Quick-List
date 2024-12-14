// tests/event/list.test.js
const { axios, BASE_URL, config } = require('../helper.test');

describe('Event - List', () => {
  test('should return a list of events', async () => {
    const response = await fetch(`${BASE_URL}/event/list`, config);

    expect(response.status).toBe(200);
	const data = await response.json();
    expect(Array.isArray(data)).toBe(true);
  });
});
