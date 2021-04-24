import {
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useGlobalContext } from "./context";
import "../style/modal.css";

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
function Modal({ id }) {
  const classes = useStyles();
  const {
    isModalOpen,
    closeModal,
    inputText,
    todos,
    setInputText,
    setTodos,
    error,
  } = useGlobalContext();

  const inputTextHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputText({ ...inputText, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let id = new Date().toString().replaceAll(" ", "");
    const newRecord = {
      ...inputText,
      id,
      createdDate: new Date().toLocaleDateString().replaceAll("/", "-"),
    };
    setTodos([...todos, newRecord]);
    setInputText({
      summary: "",
      description: "",
      dueDate: "",
      priority: Number,
      completed: false,
    });
    closeModal();
  };
  console.log(todos);
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <form>
          <h3 className={"heading"}>Add Task</h3>

          <div className={"taskForm"}>
            <div>
              <label>Summary</label>

              <TextField
                variant="outlined"
                autoComplete="off"
                name="summary"
                placeholder="Summary"
                value={inputText.summary}
                onChange={inputTextHandler}
              />
            </div>
            {inputText.summary.length <= 10 ? (
              <div className={"warning"}>{error.summaryError10}</div>
            ) : (
              <div className={"warning"}>{null}</div>
            )}
            {inputText.summary.length >= 140 ? (
              <div className={"warning"}>{error.summaryError140}</div>
            ) : (
              <div className={"warning"}>{null}</div>
            )}
            <br />
            <div>
              <label>Description</label>

              <TextField
                // multiline={true}
                // rows={4}
                variant="outlined"
                autoComplete="off"
                name="description"
                placeholder="Description"
                value={inputText.description}
                onChange={inputTextHandler}
              />
            </div>
            {inputText.description.length <= 10 ? (
              <div className={"warning"}>{error.descriptionError10}</div>
            ) : (
              <div className={"warning"}>{null}</div>
            )}
            <br />
            {inputText.description.length >= 500 ? (
              <div className={"warning"}>{error.descriptionError500}</div>
            ) : (
              <div className={"warning"}>{null}</div>
            )}
            <label>Due date</label>

            <TextField
              id="date"
              type="date"
              // defaultValue="2017-05-24"
              className={classes.textField}
              name="dueDate"
              value={inputText.dueDate}
              onChange={inputTextHandler}
            />
            <br />
            <br />

            <label>Priority</label>

            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                native
                name="priority"
                value={inputText.priority}
                onChange={inputTextHandler}
              >
                <option value={"None"}>None</option>
                <option value={"Low"}>Low</option>
                <option value={"Medium"}>Medium</option>
                <option value={"High"}>High</option>
              </Select>
            </FormControl>
          </div>
          {/* <br /> */}

          <div className={"buttonContainer"}>
            <Button className="close-modal-btn" onClick={closeModal}>
              Cancel
            </Button>
            <Button
              className="close-modal-btn"
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
