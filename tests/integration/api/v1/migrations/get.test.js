import database from 'infra/database.js';

test("Get to /api/v1/migrations should return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations");
    expect(response.status).toBe(200);

    const respondeBody = await response.json();

    console.log({"Ambiente: ": process.env.NODE_ENV,
        "POSTGRES_HOST: ": process.env.POSTGRES_HOST,
        "POSTGRES_PORT: ": process.env.POSTGRES_PORT,
        "POSTGRES_USER: ": process.env.POSTGRES_USER,
        "POSTGRES_PASSWORD: ": process.env.POSTGRES_PASSWORD,
        "POSTGRES_DB: ": process.env.POSTGRES_DB,})

    expect(Array.isArray(respondeBody)).toBe(true);
    expect(respondeBody.length).toBeGreaterThan(0);
});
