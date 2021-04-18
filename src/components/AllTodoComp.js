import React from "react";
import Category from "./Category";
import SortTodo from "./SortTodo";
import { useGlobalContext } from "./context";
import GroupbyFilter from "./GroupbyFilter";

function AllTodoComp() {
  const { todos, setTodos, newTodos } = useGlobalContext();
  return (
    <div>
      {/* <GroupbyFilter /> */}
      <Category />
      <SortTodo />

    </div>
  );
}

export default AllTodoComp;
