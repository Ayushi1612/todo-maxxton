import { Button } from "@material-ui/core";
import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useGlobalContext } from "./context";
import '../style/todotable.css'
function Todo({ todo }) {
  const { todos, setTodos, openEditTodoModal, seteditTodo } = useGlobalContext();

  let id;
 
  return (
    <>
      <td className={`${todo.completed ? "completedText" : ""}`}>
        {todo.summary}
      </td>

      <td className={`${todo.completed ? "completedText" : ""}`}>
        {todo.priority}
      </td>
      <td className={`${todo.completed ? "completedText" : ""}`}>
        {todo.createdDate}
      </td>
      <td className={`${todo.completed ? "completedText" : ""}`}>
        {todo.dueDate}
      </td>
      <td>
        <Button>
          <EditIcon
            onClick={
              
              (e) => {
                todos.filter((el) => (id = todo.id));
                // console.log(todo, "filtered");
                openEditTodoModal()
                seteditTodo(todo)
            }
          }
          />
        </Button>
        <Button
          onClick={(e) => {
            setTodos(todos.filter((el) => el.id !== todo.id));
          }}

        >
          <DeleteIcon />
        </Button>

        <Button
          className={`${todo.completed ? "completed" : ""}`}
          onClick={(e) => {
            setTodos(
              todos.map((el) => {
                if (el.id === todo.id) {
                  return {
                    ...el,
                    completed: !el.completed,
                  };
                }
                console.log(el);
                return el;
              })
            );
          }}
        >{`${todo.completed ? "Re-Open" : "Done"}`}</Button>
      </td>
    </>
  );
}

export default Todo;
