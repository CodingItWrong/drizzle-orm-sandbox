import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { user } from "./schema";

const connectionString = "postgres://josh:@localhost:5432/drizzle"
const sql = postgres(connectionString, { max: 1 })
const db = drizzle(sql);

(async () => {
  await db.delete(user);
  await db.insert(user).values({
    name: "josh"
  });

  await sql.end();
})();
