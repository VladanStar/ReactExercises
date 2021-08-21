import React, { useState } from "react";

import "./App.css";
function App() {
  // react.createElement(div)

  //useState();
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  // const[user, setUser] = useState({
  //   ime:"Vladan",
  //   godine:"48",
  //   objave["RMA","ISA"];
  // })

  const increment =()=>{
    setCount(count+1);
    setRed(!isRed);
  }

  return (
    <div className="app">
      <h1 className={isRed ? "red": "green"}>Naslov koji menja bolju</h1>
      <button onClick={increment}>Uvecaj</button>
      
      <h1>{count}</h1>
    </div>
  );
}

export default App;
