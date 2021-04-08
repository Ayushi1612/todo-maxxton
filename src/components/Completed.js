import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "../style/todotable.css";

//this component will display the ALL category todos
function Todorecord({ todo }) {
  const { todos, setTodos, tododetails, setTododetails } = useGlobalContext();
  // useEffect(() => {setTododetails(...tododetails, todo)
  //   console.log(todo)

  // }, [todo])
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
          <EditIcon />
        </Button>
        <Button
          onClick={(e) => {
            setTodos(todos.filter((el) => el.id !== todo.id));
          }}
        >
          <DeleteIcon />
        </Button>