// import { useGetTodosQuery } from "./store/apis";
import { useState } from "react";
import { useGetTodoByQuery } from "./store/apis/todosAPIS";

export const TodosApp = () => {
  const [todoId, setTodoId] = useState(1);
  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoByQuery(todoId);

  const handleNextTodo = () => {
    setTodoId(todoId + 1);
  };

  const handlePrevTodo = () => {
    if(todoId!==1){
        setTodoId(todoId - 1);
    }
  };

  console.log(todo);
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>is Loading {isLoading ? "TRUE" : "FALSE"}</h4>
      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={handlePrevTodo}>Prev Todo</button>
      <button onClick={handleNextTodo}>Next Todo</button>
      {/* <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.complete?'DONE ':'Pending '}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
