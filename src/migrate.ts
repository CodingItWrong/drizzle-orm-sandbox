import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const connectionString = "postgres://josh:@localhost:5432/drizzle"
const sql = postgres(connectionString, { max: 1 })
const db = drizzle(sql);

(async () => {
  await migrate(db, { migrationsFolder: "drizzle" });
  await sql.end();
})();
