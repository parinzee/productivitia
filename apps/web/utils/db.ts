import Dexie, { Table } from "dexie";

export interface Companion {
  id?: number;
  name: string;
  experience: number;
  maxExperience: number;
  level: number;
}

export interface Todo {
  id?: number;
  title: string;
}

export class Database extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  companions!: Table<Companion>;
  todos!: Table<Todo>;

  constructor() {
    super("Database");
    this.version(2).stores({
      companions: "id++, name, experience, maxExperience, level",
      Todos: "id++, title",
    });
  }
}

export const db = new Database();
