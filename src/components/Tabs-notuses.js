import React, { useState } from "react";
import "../style/tabs.css";
import Todo from "./Todo";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          All
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Pending
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Completed
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Todo toggleTab={toggleTab}/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Todo toggleTab={toggleTab}/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Todo toggleTab={toggleTab}/>
        
        </div>
      </div>
    </div>
  );
}

export default Tabs;
