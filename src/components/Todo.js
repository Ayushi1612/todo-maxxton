import React, { useEffect, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, FormControl, Select, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import { useGlobalContext } from "./context";
import Todotable from "./Todotable";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
function Todo() {
  const classes = useStyles();
  const {
    inputText,
    todos,
    setInputText,
    setTodos,
    idTodo, setIdTodo,deleteHandler
  } = useGlobalContext();

//   var values = [],
//   keys = Object.keys(localStorage),
//   i = keys.length;

// while (i--) {
//   values.push(localStorage.getItem(keys[i]));
// }
// let arr=[]
// console.log(values.length)
// for(let i=0; i<values.length;i++ ){
//   arr[i] = JSON.parse(values[i])
// }
//   console.log(arr);



  // const idTodo = useRef(null);
  // const [arrTodo, setArrTodo] = useState([]);
  // const [idTodo, setIdTodo] = useState();
  // useEffect(() => {
  //   setArrTodo(arr)
  // const { idTodo, setIdTodo,deleteHandler } = useGlobalContext();

  // }, [idTodo,arrTodo])
  // console.log(arr[0].description, "todo");
  // console.log(arr[0], "todo");
  // setArrTodo(arr)

  // const deleteHandler = (e) => {
  //   console.log(idtodo);

  // setArrTodo()
  // };
  return (
    <div>
      <table>
        <tr>
          <th>Group By</th>
          <th>Search</th>
        </tr>
        <tr>
          <td>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                native
                name="priority"
                // value={inputText.priority}
                // onChange={inputTextHandler}
              >
                <option value="None">None</option>
                <option value="Created On">Created On</option>
                <option value="Pending On">Pending On</option>
                <option value="Priority">Priority</option>
              </Select>
            </FormControl>
          </td>
          <td>
            <TextField placeholder="Search" variant="outlined" />
          </td>
        </tr>
      </table>
      <br />

      <table>
        <tr>
          <th>Summary</th>
          <th>Priority</th>
          <th>
            Created On
            <Button>
              <ImportExportIcon />
            </Button>
            {/* <Button><ImportExportIcon/></Button> */}
          </th>
          <th>Due By</th>
          <th>Actions</th>
        </tr>

        {
          // todos.map((todo) => {
          //   return (
          //     <Todotable />
          //   })
          // arr[0].description
          todos.map((todo)=>{
            return(
              <tr>

                <Todotable key={todo.id} todo={todo}/>
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default Todo;
