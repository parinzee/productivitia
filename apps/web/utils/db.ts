import Dexie, { Table } from "dexie";

export interface Companion {
  id?: number;
  name: string;
  experience: number;
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
    this.version(1).stores({
      companions: "id++, name, experience",
      Todos: "id++, title",
    });
  }
}

export const db = new Database();
