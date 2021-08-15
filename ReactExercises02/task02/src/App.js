import React, { useState } from "react";
import Objava from "./Objava";
import "./App.css"

function App() {
  const [users, setUser] = useState([
    { ime: "Stajic", objava: "golman", broj: "1" },
    { ime: "Kostov", objava: "desni bek", broj: "2" },
    { ime: "Palezevic", objava: "desni half", broj: "4" },
    { ime: "Tomcic", objava: "centarhalf", broj: "5" },
    { ime: "Krstic", objava: "centarfor", broj: "9" },
    { ime: "Stasic", objava: "centralni vezni", broj: "8" },
  ]);

  return <div className="app">
   {users.map(user=>(
     <Objava ime ={user.ime} objava ={user.objava}  broj={user.broj}/>
   ))}

  </div>
};

export default App;
