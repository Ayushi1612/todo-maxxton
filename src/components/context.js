import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState({
    summary: "",
    description: "",
    dueDate: "",
    priority: Number,
    completed: false
    // createdDate: ""
  });

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

  const [arrTodo, setArrTodo] = useState([]);
  const [idTodo, setIdTodo] = useState();

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
todos,inputText,setTodos,setInputText,deleteHandler,error,idTodo,setIdTodo,arrTodo, setArrTodo
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
