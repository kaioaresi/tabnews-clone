import database from 'infra/database.js';

require('dotenv').config({ path: '.env.development' });

test("Get to /api/v1/migrations should return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations");
    expect(response.status).toBe(200);

    const respondeBody = await response.json();

    expect(Array.isArray(respondeBody)).toBe(true);
    expect(respondeBody.length).toBeGreaterThan(0);
});
