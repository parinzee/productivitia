import { useLiveQuery } from "dexie-react-hooks";
import * as React from "react";
import { addExperience, removeEnergy } from "../../../utils/companionHelper";
import { Companion, db } from "../../../utils/db";

export default function Todos() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const allTodos = useLiveQuery(() => db.todos.toArray());

  const handleClick = async (todoID: number | undefined) => {
    if (todoID) {
      await db.todos.delete(todoID);
      const companion = (await db.companions.get(1)) as Companion;
      removeEnergy(companion, 10);
      addExperience(companion, 50);
    }
  };

  const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputRef.current) {
      const todoInput = inputRef.current.value;
      if (todoInput.trim().length === 0) {
        return;
      }

      db.todos.add({
        title: todoInput,
      });

      inputRef.current.value = "";
    }
  };

  return (
    <div className="glass-box col-span-2 row-span-3 select-none">
      <div className="w-full h-full flex flex-col content-center items-center justify-center">
        <input
          type="text"
          className="w-11/12 text-lg bg-gray-200 border-2 focus:outline-none focus:bg-white border-indigo-400 rounded-lg my-2 p-1"
          placeholder="Water plants..."
          ref={inputRef}
          onKeyUp={handleInput}
        />
        <hr className="border-t border-gray-200 w-full" />
        <div className="h-full w-full overflow-y-scroll flex flex-col content-center items-center">
          {allTodos?.map((todo) => (
            <div
              onClick={() => handleClick(todo.id)}
              key={todo.id}
              className="w-11/12 bg-white text-lg text-black font-semibold rounded-lg p-1 mt-5 hover:bg-green-300 transition-all cursor-pointer"
            >
              {todo.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
