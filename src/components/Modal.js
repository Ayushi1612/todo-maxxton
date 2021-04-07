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
import '../style/modal.css'


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
function Modal() {
  const classes = useStyles();
  const { isModalOpen, closeModal, inputText,todos,setInputText,setTodos,error } = useGlobalContext();
  // const [inputText, setInputText] = useState({
  //   summary: "",
  //   description: "",
  //   dueDate: "",
  //   priority: Number,
  //   // createdDate: ""
  // });
  const inputTextHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // inputText.
    setInputText({ ...inputText, [name]: value });
    console.log(inputText);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let id = new Date().toString().replaceAll(" ", "")
    const newRecord = {
      ...inputText,
      id,
      createdDate: new Date().toLocaleDateString().replaceAll("/", "-"),
    };
    setTodos([...todos, newRecord]);
    // localStorage.setItem(id,JSON.stringify(newRecord))
    // console.log(id,todos);
    closeModal()
    // setInputText({ summary: "", description: "", dueDate: "", priority: "" });
  };
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
      <h3 className={"heading"}>Add Task</h3>
        <form>
          <div className={"taskForm"}>

          <div>
            <label>Summary</label>
            <br />
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
            <div>{error.summaryError10}</div>
          ) : (
            <div>{null}</div>
          )}
          {inputText.summary.length >= 140 ? (
            <div>{error.summaryError140}</div>
          ) : (
            <div>{null}</div>
          )}
          <br />
          <div>
            <label>Description</label>
            <br />
            <TextField
              variant="outlined"
              autoComplete="off"
              name="description"
              placeholder="Description"
              value={inputText.description}
              onChange={inputTextHandler}
            />
          </div>
          {inputText.description.length <= 10 ? (
            <div>{error.descriptionError10}</div>
          ) : (
            <div>{null}</div>
          )}
          <br />
          {inputText.description.length >= 500 ? (
            <div>{error.descriptionError500}</div>
          ) : (
            <div>{null}</div>
          )}
          <br />
          <TextField
            id="date"
            type="date"
            // defaultValue="2017-05-24"
            className={classes.textField}
            name="dueDate"
            value={inputText.dueDate}
            onChange={inputTextHandler}
          />

          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              native
              name="priority"
              value={inputText.priority}
              onChange={inputTextHandler}
            >
              <option value={0}>None</option>
              <option value={10}>Low</option>
              <option value={20}>Medium</option>
              <option value={30}>High</option>
            </Select>
          </FormControl>
      </div>

        </form>

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

    </div>
  );
}

export default Modal;
