test("Get to /api/v1/status should return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.update_at).toBeDefined();

    const parsedUpdateAt = new Date(responseBody.update_at).toISOString(); // validando o retorno é uma data no ISO 8601
    expect(responseBody.update_at).toEqual(parsedUpdateAt);

    // check db version
    const dbVersion = responseBody.db_info.version;
    expect(dbVersion).toBe(16);

});