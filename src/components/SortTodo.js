import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useGlobalContext } from "./context";
import Todo from "./Todo";
function SortTodo() {
  const { todos, ascSummarySort, descSummarySort, ascprioritySort, descprioritySort ,
    asccreatedSort, desccreatedSort, ascdueSort, descdueSort
  } = useGlobalContext();


  //==============================================================================================================

  return (
    <div>
      <table>
        <tr>
          <th>
            <span>Summary</span>
            <Button onClick={ascSummarySort}>
            <ArrowDropUpIcon />

            </Button>
            <Button onClick={descSummarySort}>
            <ArrowDropDownIcon />

            </Button>
          </th>
          <th>
            <span>Priority</span>
            <Button onClick={ascprioritySort}>
              <ArrowDropUpIcon />
            </Button>
            <Button onClick={descprioritySort}>
              <ArrowDropDownIcon />
            </Button>
          </th>
          <th>
            <span>Created Date</span>
            <Button onClick={asccreatedSort}>
              <ArrowDropUpIcon />
            </Button>
            <Button onClick={desccreatedSort}>
              <ArrowDropDownIcon />
            </Button>
          </th>
          <th>
            <span>Due Date</span>
            <Button onClick={ascdueSort}>
              <ArrowDropUpIcon />
            </Button>
            <Button onClick={descdueSort}>
              <ArrowDropDownIcon />
            </Button>
          </th>
          <th>
            <span>Actions</span>
          </th>
        </tr>
        {todos.map((todo) => {
          return (
            <tr>
              <Todo key={todo.id} todo={todo} />
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default SortTodo;
