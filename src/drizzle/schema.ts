import { pgEnum, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

// Enums
export const roleEnum = pgEnum("role", ["USER", "ADMIN"]);

// Tables define
export const userTable = pgTable("user", {
  id: text("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").unique().notNull(),
  role: roleEnum("role").default("USER").notNull(),
  hashedPassword: varchar("hashedPassword").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});

// Types
export type User = typeof userTable.$inferSelect;
export type Session = typeof sessionTable.$inferSelect;
