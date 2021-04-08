import React, { useEffect, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, FormControl, Select, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import { useGlobalContext } from "./context";
import "../style/todotable.css";
import Todorecord from "./Todorecord";
import Category from "./Category";
// import Pending from "./Pending";
// import { Button, FormControl, Select, TextField } from "@material-ui/core";

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
function Todotable() {
  const classes = useStyles();
  const [showCategoryTodo, setShowCategoryTodo] = useState([]);
  const {
    // inputText,
    todos,
    isPending,
    pending,
    setPending,
    Active,
    completed,
    // setInputText,
    // setTodos,
    // idTodo,
    // setIdTodo,
    // deleteHandler,
    // tododetails,
    // setTododetails,
    // pendingFilterItems,
    // completedFilterItems,
    // isPending,
    // isCompleted,
  } = useGlobalContext();

  if (Active === "all") {
    setShowCategoryTodo(todos);
  }
  if (Active === "completedActive") {
    setShowCategoryTodo(completed);
  }
  if (Active === "pendingActive") {
    setShowCategoryTodo(pending);
  }

  // let isCompleted = []
  // let isPending =[]
  // const filterItems = (category) =>{
  //   todos.map((element)=>{
  //     if(element.completed){
  //       isCompleted.push(element)
  //     }
  //     else{
  //       isPending.push(element)
  //     }
  //   })
  //     console.log(isCompleted)
  //     console.log(isPending)
  //   }
  return (
    <>
      {/* <Category isCompleted={isCompleted} isPending={isPending}/> */}
      {/* <Button onClick={filterItems}>category</Button> */}

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
      <Category />
      <table>
        <tr>
          <th>
            <Button>Summary</Button>
          </th>
          <th>
            <Button>Priority</Button>
          </th>
          <th>
            <Button>
              Created On
              {/* <ImportExportIcon /> */}
            </Button>
            {/* <Button><ImportExportIcon/></Button> */}
          </th>
          <th>
            <Button>Due By</Button>
          </th>
          <th>
            <Button>Actions</Button>
          </th>
        </tr>
        {
          showCategoryTodo.map((todo) => {
            return (
              <tr>
                <Todorecord key={todo.id} todo={todo} />
              </tr>
            );
          })
        }
      </table>
    </>
  );
}

export default Todotable;
