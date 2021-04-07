import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import Todo from "./Todo";

function Todos() {
  const {
    inputText,
    todos,
    setInputText,
    setTodos,
  } = useGlobalContext();

  var values = [],
  keys = Object.keys(localStorage),
  i = keys.length;

while (i--) {
  values.push(localStorage.getItem(keys[i]));
}
let arr=[]
console.log(values.length)
for(let i=0; i<values.length;i++ ){
  arr[i] = JSON.parse(values[i])
}
  console.log(arr);
// values.map((record)=>{
//   var arr = JSON.parse(values[record])
//   console.log(arr);

// })
  useEffect(() => {
    
     
   
  }, []);
  return (
    <div> 

<Todo arr={arr}/>

    </div>
  );
}

export default Todos;
