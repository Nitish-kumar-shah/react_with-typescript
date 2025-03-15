import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const Todo = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (!task.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    const newTodo: Todo = {
      id: todo.length + 1,
      task,
      completed: false,
    };

    setTodo((prev) => [...prev, newTodo]);
    setTask("");
  };

  return (
    <div className="font-serif bg-red-400 h-screen w-screen flex flex-col text-center top-5">
      <h2 className="mt-[90px]">Todo List</h2>
      <div className="flex text-center justify-center items-centers mt-[30px] gap-5 mb-7">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-2xs bg-red-300 outline-0  rounded-[5px] px-2"
        />

        <button
          className=" bg-teal-300 rounded-2xl p-1 text-[12px] hover:scale-125 transition duration-300 select-none cursor-pointer"
          onClick={addTodo}
        >
          add todo
        </button>
      </div>

      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.completed ? "(completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
