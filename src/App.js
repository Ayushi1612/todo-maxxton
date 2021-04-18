import React, { useState } from 'react'
import EditModal from './components/EditModal';
import EditTodoForm from './components/EditTodoForm';
import GroupbyFilter from './components/GroupbyFilter';
import Home from './components/Home'
import Modal from './components/Modal'

export default function App() {
  const appStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    innerWidth:"80vw",
  };
  return (
    <div >
    <Home/>
    <Modal/>
    <EditTodoForm/>
    {/* <EditModal/> */}
    </div>
  )
}