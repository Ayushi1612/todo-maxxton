import { Button } from '@material-ui/core';
import React from 'react'
import { useGlobalContext } from "./context";

function Category() {
  const { allFilterItems, todos, setTodos, pendingFilterItems,
    completedFilterItems } = useGlobalContext();

    return (
        <div>
            {/* onClick={allFilterItems} */}
            <Button onClick={allFilterItems}>All</Button>
            <Button onClick={completedFilterItems}>Completed</Button>
            <Button onClick={pendingFilterItems}>Pending</Button>
            
        </div>
    )
}

export default Category
