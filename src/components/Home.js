import React, { useEffect } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useGlobalContext } from './context';
import Todo from './Todo'

function Home() {
  const { openModal,deleteHandler } = useGlobalContext();
// useEffect(() => {
//   console.log("deleteHandler from home")
// }, [deleteHandler])
    return (
        <div>
          <h2>ToDo App</h2>
            <button onClick={openModal} className="btn">
                <AddCircleIcon/>
            </button>
      <Todo/>

        </div>
    )
}

export default Home
