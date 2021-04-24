import {
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
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
function EditTodoForm() {
  const {
    isEditTodoModalOpen,
    closeEditTodoModal,
    error,
    seteditTodo,
    editTodo,
    inputText,
    todos,
    setInputText,
    setTodos,
  } = useGlobalContext();

  const classes = useStyles();
  // const { isModalOpen, closeModal, inputText,todos,setInputText,setTodos,error } = useGlobalContext();

  const [editTodoForm, setEditTodoForm] = useState();
  console.log(editTodoForm, "editTodoForm");

  useEffect(() => {
    setEditTodoForm(editTodo);
    console.log("editTodo useeffect");
  }, [editTodo]);

  const editTextHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditTodoForm({ ...editTodoForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = editTodo.id;
    console.log(todos, "delete")
    const editedRecord = {
      ...editTodoForm,
      id,
      createdDate: new Date().toLocaleDateString().replaceAll("/", "-"),
    };
    setTodos([...todos.filter((el) => el.id !== editTodo.id), editedRecord]);
    closeEditTodoModal();
  };

  // console.log(todos)
  return (
    <div
      className={`${
        isEditTodoModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3 className={"heading"}>Edit Task</h3>
        <form>
          <div className={"taskForm"}>
            <div>
              <label>Edit Summary</label>
              <br />
              <TextField
                variant="outlined"
                autoComplete="off"
                name="summary"
                placeholder="Summary"
                //  value={editTodo.summary}
                onChange={editTextHandler}
              />
            </div>
            {/* {inputText.summary.length <= 10 ? (
            <div>{error.summaryError10}</div>
          ) : (
            <div>{null}</div>
          )}
          {inputText.summary.length >= 140 ? (
            <div>{error.summaryError140}</div>
          ) : (
            <div>{null}</div>
          )} */}
            <br />
            <div>
              <label>Edit Description</label>
              <br />
              <TextField
                variant="outlined"
                autoComplete="off"
                name="description"
                placeholder="Description"
                // value={editTodo.description}
                // onChange={editTextHandler}
              />
            </div>
            {/* {inputText.description.length <= 10 ? (
            <div>{error.descriptionError10}</div>
          ) : (
            <div>{null}</div>
          )}
          <br />
          {inputText.description.length >= 500 ? (
            <div>{error.descriptionError500}</div>
          ) : (
            <div>{null}</div>
          )} */}
            <br />
            <label>Edit Due Date</label>
            <TextField
              id="date"
              type="date"
              // defaultValue="2017-05-24"
              className={classes.textField}
              name="dueDate"
              // value={inputText.dueDate}
              // onChange={inputTextHandler}
            />
            <br />
            <label>Edit Priority</label>

            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                native
                name="priority"
                //   value={inputTe.3xt.priority}
                // onChange={inputTextHandler}
              >
                <option value={"None"}>None</option>
                <option value={"Low"}>Low</option>
                <option value={"Medium"}>Medium</option>
                <option value={"High"}>High</option>
              </Select>
            </FormControl>
          </div>

          <Button className="close-modal-btn" onClick={closeEditTodoModal}>
            Cancel Changes
          </Button>
          <Button
            className="close-modal-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EditTodoForm;
