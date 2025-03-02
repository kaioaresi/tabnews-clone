import database from "infra/database";

async function status(request, response) {
    const updateAt = new Date().toISOString();
    // Version
    const dbVersionQuery = await database.query('SHOW server_version;');
    const dbVersionParse = dbVersionQuery.rows[0].server_version;
    
    // max_connections
    const dbMaxConnectionsQuery = await database.query('show max_connections;');
    const dbMaxConnections = dbMaxConnectionsQuery.rows[0].max_connections;

    // current connections
    const dbCurrentConnections = await database.query('SELECT count(*) FROM pg_stat_activity;');
    const dbConnection = dbCurrentConnections.rows[0].count;

    response.status(200).json({
        update_at: updateAt,
        db_info: {
            version: parseFloat(dbVersionParse),
            max_connections: parseInt(dbMaxConnections),
            connections: parseInt(dbConnection),
        },
    });
}

export default status;