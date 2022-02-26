import Dexie, { Table } from "dexie";

export interface Companion {
  id?: number;
  name: string;
  experience: number;
  maxExperience: number;
  lastOpened: Date;
  energy: number;
  level: number;
  current: boolean;
}

export interface Todo {
  id?: number;
  title: string;
}

export class Database extends Dexie {
  companions!: Table<Companion>;
  todos!: Table<Todo>;

  constructor() {
    super("Database");
    this.version(5).stores({
      companions:
        "id++, name, experience, maxExperience, level, lastOpened, energy, current",
      Todos: "id++, title",
    });
  }
}

export const db = new Database();
