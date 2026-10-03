import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  jsonb,
  integer,
  boolean,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  passwordHash: text("password_hash"),
  plan: varchar("plan", { length: 50 }).default("gratuit").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const documents = pgTable("documents", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }).notNull(),
  type: varchar("type", { length: 100 }),
  genre: varchar("genre", { length: 100 }),
  content: text("content").default(""),
  analysis: jsonb("analysis"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const templates = pgTable("templates", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  genre: varchar("genre", { length: 100 }).notNull(),
  type: varchar("type", { length: 100 }),
  description: text("description"),
  structure: jsonb("structure").notNull(),
  example: text("example"),
  isPremium: boolean("is_premium").default(false).notNull(),
});

export const glossaryTerms = pgTable("glossary_terms", {
  id: serial("id").primaryKey(),
  term: varchar("term", { length: 255 }).notNull().unique(),
  definition: text("definition").notNull(),
  category: varchar("category", { length: 100 }),
  example: text("example"),
});

export const usersRelations = relations(users, ({ many }) => ({
  documents: many(documents),
}));

export const documentsRelations = relations(documents, ({ one }) => ({
  user: one(users, { fields: [documents.userId], references: [users.id] }),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Document = typeof documents.$inferSelect;
export type NewDocument = typeof documents.$inferInsert;
export type Template = typeof templates.$inferSelect;
