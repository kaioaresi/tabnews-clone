import migrationsRunner from 'node-pg-migrate'
import { join } from "node:path"


export default async function migrations(request, response) {
    if (request.method === "GET") {
        console.log("Method GET");
        const migrations = await migrationsRunner({
            databaseUrl: process.env.DATABASE_URL,
            dir: join("infra","migrations"),
            dryRun: true,
            direction: "up",
            verbose: true,
            migrationsTable: "pgmigrations",
        });
        response.status(200).json(migrations);
    }

    if (request.method === "POST") {
        console.log("Method POST");
        const migrations = await migrationsRunner({
            databaseUrl: process.env.DATABASE_URL,
            dir: join("infra","migrations"),
            dryRun: false,
            direction: "up",
            verbose: true,
            migrationsTable: "pgmigrations",
        });
        response.status(200).json(migrations);
    }

    return response.status(405)

}
