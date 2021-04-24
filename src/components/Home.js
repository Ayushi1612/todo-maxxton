import React from "react";
import { useGlobalContext } from "./context";
import AddIcon from "@material-ui/icons/Add";
import GroupbyFilter from "./GroupbyFilter";
import Category from "./Category";
import AllTodoComp from "./AllTodoComp";
import SortTodo from "./SortTodo";
import { Modal } from "@material-ui/core";
function Home() {
  const {  openModal, todos, setTodos, openEditTodoModal } = useGlobalContext();
  // const {  } = useGlobalContext();


  return (
    <div>
       {/*  */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>ToDo App</h2>
        {/* Modal / todo input open button  */}
        <button onClick={openModal} className="btn">
          <AddIcon />
        </button>
      </div>
      <br/>
      <GroupbyFilter />
      <br/>
      <AllTodoComp />
    </div>
  );
}

export default Home;
