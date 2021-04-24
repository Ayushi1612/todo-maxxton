import { Container } from "@material-ui/core";
import React, { useState } from "react";
import EditModal from "./components/EditModal";
import EditTodoForm from "./components/EditTodoForm";
import GroupbyFilter from "./components/GroupbyFilter";
import Home from "./components/Home";
import Modal from "./components/Modal";

export default function App() {
  const appStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    innerWidth: "80vw",
  };
  return (
    <div>
      <Container maxWidth="lg">
        <h3>Search and group by filter are still under development</h3>
        <Home />
        <Modal />
        <EditTodoForm />
      </Container>

      {/* <EditModal/> */}
    </div>
  );
}
