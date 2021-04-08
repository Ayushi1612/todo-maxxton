import React from "react";
import { useGlobalContext } from "./context";
import Todotable from "./Todotable";
// import Category from "./Category";
import Pending from './Pending'
// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));
function Todo() {
  // const classes = useStyles();
  const {
    // inputText,
    // todos,
    // setInputText,
    // setTodos,
    // idTodo, setIdTodo,deleteHandler,tododetails, setTododetails
    isPending,
    isCompleted,
  } = useGlobalContext();


  //  let isCompleted = []
  // let isPending =[]
  // const filterItems = (category) =>{
  //   todos.map((element)=>{
  //     if(element.completed){
  //       isCompleted.push(element)
  //     }
  //     else{
  //       isPending.push(element)
  //     }
  //   })
  //     console.log(isCompleted)
  //     console.log(isPending)
  //   }

// const sortSummary = () =>{
// console.log(tododetails)
// }
//   var values = [],
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



  // const idTodo = useRef(null);
  // const [arrTodo, setArrTodo] = useState([]);
  // const [idTodo, setIdTodo] = useState();
  // useEffect(() => {
  //   setArrTodo(arr)
  // const { idTodo, setIdTodo,deleteHandler } = useGlobalContext();

  // }, [idTodo,arrTodo])
  // console.log(arr[0].description, "todo");
  // console.log(arr[0], "todo");
  // setArrTodo(arr)

  // const deleteHandler = (e) => {
  //   console.log(idtodo);

  // setArrTodo()
  // };
  return (
    <div>
            {/* <Button onClick={filterItems}>category</Button> */}
     
 
<Todotable/>
{/* <div>
  {isPending ? <Pending/> : null}
</div> */}

    </div>
  );
}

export default Todo;



  