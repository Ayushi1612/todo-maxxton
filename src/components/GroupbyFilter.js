import {
  Box,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalContext } from "./context";
import AddIcon from "@material-ui/icons/Add";

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
function GroupbyFilter() {
  const classes = useStyles();
  const { todos, setTodos, groupByPriority, setsearchTodo, searchTodo } = useGlobalContext();
  const [groupByValue, setGroupByValue] = useState("");

  useEffect(() => {
    console.log("logged");
    setGroupByValue(tar);
    console.log("logged", groupByValue);
  });

  useEffect(() => {
    
  });

  //=====================================================================================================================
  //perform sorting based on Group by value
  //=====================================================================================================================

  // let groupByValue =""
  let tar = "";
  const groupsortHandler = (e) => {
    tar = e.target.value;
    // setGroupByValue(e.target.value)
    console.log(groupByValue);
    if (groupByValue === "Priority") {
      groupByPriority();
    }
    if (groupByValue === "Created On") {
      // groupByPriority()
    }
    if (groupByValue === "Pending") {
      // groupByPriority()
    }
    //if "None"
    else {
      setTodos(todos);
    }
  };

  //seacrh
  let searchTodos = [];
  let ifPresent
  const searchHandler = (e) => {
    let searchText = e.target.value.toLowerCase();
    searchTodos.push(todos.filter((el) => el.summary.includes(searchText)));
    console.log(searchTodos, "search1");
    setsearchTodo(searchTodos)
    console.log(searchTodo, "search2");
    ifPresent = true
    searchTodos = []
    setsearchTodo([])
    console.log(searchTodo, "search3");

  };

  //=====================================================================================================================

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
                name="groupby"
                // value={inputText.priority}
                // onChange={groupsortHandler}
                onChange={groupsortHandler}
              >
                <option value="None">None</option>
                <option value="Created On">Created On</option>
                <option value="Pending">Pending</option>
                <option value="Priority">Priority</option>
              </Select>
            </FormControl>
          </td>
          <td>
            <TextField
              placeholder="Search"
              variant="outlined"
              onChange={searchHandler}
            />

            {/* tasks.filter(item => item.innerText.toLowerCase().includes(searchText)).forEach(item => item.style.display = "flex"); */}
          </td>
        </tr>
      </table>
      {/* {ifPresent ? <h2>hi</h2> : <h2>Oops!</h2>} */}
    </div>
  );
}

export default GroupbyFilter;
