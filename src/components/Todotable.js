import React from 'react'
import { useGlobalContext } from "./context";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import '../style/todotable.css'
function Todotable({todo}) {
    const {
        todos,
        setTodos,
      } = useGlobalContext();
    return (    
        <>
        <td className={`${todo.completed ? "completedText" : ""}`}>{todo.summary}</td>
                <td className={`${todo.completed ? "completedText" : ""}`}>{todo.priority}</td>
                <td className={`${todo.completed ? "completedText" : ""}`}>{todo.createdDate}</td>
                <td className={`${todo.completed ? "completedText" : ""}`}>{todo.dueDate}</td>
                <td>
                  <Button>
                    <EditIcon />
                  </Button>
                  <Button
                    onClick={(e) => {
                      setTodos(todos.filter(el => el.id !== todo.id))
                    }}
                  >
                    <DeleteIcon />
                  </Button>

                  <Button className={`${todo.completed ? "completed" : ""}`}
                  onClick={
                    (e) => {
                        setTodos(todos.map((el)=>{
                            if(el.id === todo.id){
                                return{
                                    ...el, completed: !el.completed
                                }
                                console.log(el)
                            }
                            console.log(el)
                            return el
                        }))
                      }
                  }
                  >{`${todo.completed ? "Re-Open" : "Done"}`}</Button>
                </td>
        </>

                


            );
    
}

export default Todotable
