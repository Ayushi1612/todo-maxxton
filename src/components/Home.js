import React, { useEffect } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useGlobalContext } from './context';
import Todos from './Todos'

function Home() {
  const { openModal,deleteHandler } = useGlobalContext();
// useEffect(() => {
//   console.log("deleteHandler from home")
// }, [deleteHandler])
    return (
        <div>
            <button onClick={openModal} className="btn">
                <AddCircleIcon/>
            </button>
      <Todos/>

        </div>
    )
}

export default Home
