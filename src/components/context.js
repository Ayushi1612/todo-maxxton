import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let isCompleted = [];
  let isPending = [];
  let Active = 'all'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pending, setPending] = useState(isPending);
  const [completed, setCompleted] = useState(isCompleted);
  const [todos, setTodos] = useState([]);
  const [arrTodo, setArrTodo] = useState(todos);
  const [inputText, setInputText] = useState({
    summary: "",
    description: "",
    dueDate: "",
    priority: Number,
    completed: false,
    // createdDate: ""
  });
  const [tododetails, setTododetails] = useState({});
  const [error, setError] = useState({
    summaryError10: "Minimum length should be 10 characters",
    summaryError140: "Maximum length should be 140 characters",
    descriptionError10: "Minimum length should be 10 characters",
    descriptionError500: "Maximum length should be 500 characters",
  });
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteHandler = () => {
    //     var values = [],
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
  };
 
  const completedFilterItems = (category) => {
    todos.map((element) => {
      if (element.completed) {
        isCompleted.push(element);
      } 
      // else {
      //   isPending.push(element);
      // }
    });
    Active = 'completedActive'
    console.log(completed);
    // console.log(isPending);
  };
  const pendingFilterItems = (category) => {
    todos.map((element) => {
      if (element.completed == false) {
        // isCompleted.push(element);
        isPending.push(element);
        isPending = [...new Set(isPending)]
      } 
    });
    // console.log(isCompleted);
    Active = 'pendingActive'
    console.log(pending);
  };
  

  const allFilterItems = (category) => {
    todos.map((element) => {
      if (element.completed == false) {
        // isCompleted.push(element);
        isPending.push(element);
        isPending = [...new Set(isPending)]
      } 
    });
    Active = 'all'
    // console.log(isCompleted);
    // console.log(pending);
  };


  const [idTodo, setIdTodo] = useState();

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        todos,
        inputText,
        setTodos,
        setInputText,
        deleteHandler,
        error,
        idTodo,
        setIdTodo,
        arrTodo,
        setArrTodo,
        tododetails,
        pendingFilterItems,
        isPending,
        isCompleted,
        completedFilterItems,
        allFilterItems,
        setTododetails,pending, setPending,completed, setCompleted, Active
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
