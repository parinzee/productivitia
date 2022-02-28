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

export interface Habit extends Todo {
  isCompleted: boolean;
}
export class Database extends Dexie {
  companions!: Table<Companion>;
  todos!: Table<Todo>;
  habits!: Table<Habit>;

  constructor() {
    super("Database");
    this.version(6).stores({
      companions:
        "id++, name, experience, maxExperience, level, lastOpened, energy, current",
      todos: "id++, title",
      habits: "id++, title, isCompleted",
    });
  }
}

export const db = new Database();
