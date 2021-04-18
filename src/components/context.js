import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let isCompleted = [];
  let isPending = [];
  let Active = "all";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditTodoModalOpen, setIsEditTodoModalOpen] = useState(false);
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
  const  openEditTodoModal = () => {
    setIsEditTodoModalOpen(true);
  };
  const closeEditTodoModal = () => {
    setIsEditTodoModalOpen(false);
  };
  const completedFilterItems = (category) => {
    todos.map((element) => {
      if (element.completed) {
        isCompleted.push(element);
        Active = "completedActive";
      }
    });
    console.log(completed);
  };
  const pendingFilterItems = (category) => {
    todos.map((element) => {
      if (element.completed == false) {
        isPending.push(element);
        isPending = [...new Set(isPending)];
        Active = "pendingActive";
      }
    });
    console.log(pending);
  };

  const allFilterItems = (category) => {
    Active = "all";
  };

  //==============================================================================================================
    // edit todos logic
  //==============================================================================================================
  
 

  //==============================================================================================================
  // variables for priority
  //==============================================================================================================

  let none = [];
  let low = [];
  let medium = [];
  let high = [];
  let prioritySortTodos = [...todos];
  let descprioritySortTodos = [...todos];
  let ascprioritySortTodos = [...todos];

  //==============================================================================================================
  // variables for summary
  //==============================================================================================================

  let ascSummarySortTodos = [...todos];
  let descSummarySortTodos = [...todos];

  //==============================================================================================================
  // variables for created date
  //==============================================================================================================

  let asccreatedSortTodos = [...todos];
  let desccreatedSortTodos = [...todos];

  //==============================================================================================================
  // variables for due date
  //==============================================================================================================

  let ascdueSortTodos = [...todos];
  let descdueSortTodos = [...todos];

  //==============================================================================================================
  //generic funtion for sorting created date, due date and summary
  //==============================================================================================================

  function todoSort(todosort) {
    return function (a, b) {
      if (a[todosort] > b[todosort]) {
        return 1;
      } else if (a[todosort] < b[todosort]) {
        return -1;
      }
      return 0;
    };
  }

  //==============================================================================================================
  // sort summary
  //==============================================================================================================

  function ascSummarySort() {
    asccreatedSortTodos.sort(todoSort("summary"));
    setTodos(asccreatedSortTodos);
    console.log(asccreatedSortTodos, "acsSummarysorted");
  }

  function descSummarySort() {
    descSummarySortTodos.sort(todoSort("summary"));
    descSummarySortTodos.reverse();
    setTodos(descSummarySortTodos);
    console.log(descSummarySortTodos, "descSummarysorted");
  }

  //==============================================================================================================
  //sort priority
  //==============================================================================================================

  //check asc and desc order clicks function

  prioritySortTodos.map((todo) => {
    //take todo in significant array
    if (todo.priority === "None") {
      none.push(todo);
    }
    if (todo.priority === "Low") {
      low.push(todo);
    }
    if (todo.priority === "Medium") {
      medium.push(todo);
    }
    if (todo.priority === "High") {
      high.push(todo);
    }
  });

  const descprioritySort = () => {
    descprioritySortTodos = [...high, ...medium, ...low, ...none];
    console.log(descprioritySortTodos, "desc");
    setTodos(descprioritySortTodos);
  };

  const ascprioritySort = () => {
    ascprioritySortTodos = [...none, ...low, ...medium, ...high];
    console.log(ascprioritySortTodos, "asc");
    setTodos(ascprioritySortTodos);
  };

  //==============================================================================================================
  // sort on createdDate
  //==============================================================================================================

  function asccreatedSort() {
    ascSummarySortTodos.sort(todoSort("createdDate"));
    setTodos(ascSummarySortTodos);
    console.log(ascSummarySortTodos, "acscreatedsorted");
  }

  function desccreatedSort() {
    desccreatedSortTodos.sort(todoSort("createdDate"));
    desccreatedSortTodos.reverse();
    setTodos(desccreatedSortTodos);
    console.log(desccreatedSortTodos, "desccreatedsorted");
  }

  //==============================================================================================================
  // sort on due Date
  //==============================================================================================================

  function ascdueSort() {
    ascdueSortTodos.sort(todoSort("dueDate"));
    setTodos(ascdueSortTodos);
    console.log(ascdueSortTodos, "acsduesorted");
  }

  function descdueSort() {
    descdueSortTodos.sort(todoSort("dueDate"));
    descdueSortTodos.reverse();
    setTodos(descdueSortTodos);
    console.log(descdueSortTodos, "descduesorted");
  }

  //==============================================================================================================

  const groupByPriority = () => {
    asccreatedSort()
    let groupByPriorityArray = [...ascprioritySortTodos]
    setTodos(groupByPriorityArray)
    console.log(groupByPriorityArray, "ascprioritySortTodos")
    console.log(todos, "todos")
  }



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
        error,
        arrTodo,
        setArrTodo,
        tododetails,
        pendingFilterItems,
        isPending,
        isCompleted,
        completedFilterItems,
        allFilterItems,
        setTododetails,
        pending,
        setPending,
        completed,
        setCompleted,
        Active,
        ascSummarySort,
        descSummarySort,
        ascprioritySort,
        descprioritySort,
        asccreatedSort,
        desccreatedSort,
        ascdueSort,
        descdueSort,
        // prioritySortTodos,
        groupByPriority,
        // edittodo,
        openEditTodoModal,
        closeEditTodoModal,
        isEditTodoModalOpen
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
