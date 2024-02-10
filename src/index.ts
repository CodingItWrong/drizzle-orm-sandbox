import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "./schema";

const { user } = schema;

const connectionString = "postgres://josh:@localhost:5432/drizzle"
const sql = postgres(connectionString, { max: 1 })
const db = drizzle(sql, { schema });

(async () => {
  await migrate(db, { migrationsFolder: "drizzle" });

  await db.delete(user);
  await db.insert(user).values({
    name: "josh"
  });
  const result = await db.query.user.findMany();
  console.log(result);

  await sql.end();
})();
