import React, { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export const TodoApp = () => {
  // const [todos, setTodos] = useState<Todo[]>([])
  // useEffect(() => {
  //     getTodo().then((res) => {
  //         setTodos(res);
  //     })
  // }, []);

  return (
    <div>
      <TodoInput />
      {/* {todos.map((el) => {
            <TodoItem key={el.id} {...el} />
        })} */}
    </div>
  );
};
