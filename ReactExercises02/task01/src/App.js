import React from "react";
import Objava from "./Objava";
import "./App.css"

// react.createElement(div)
function App(){


  return(

    <div className="app">
   <Objava ime="Ranko Stajic" objava ="golman" pregleda="1"/>
   <Objava ime="Zoran Nikolic" objava= "desni bek" pregleda="2"/>
   <Objava ime="Dragan Ikanovic" objava="levi bek" pregleda="3"/>
   <Objava ime="Cedomir Tomcic" objava="desni half" pregleda="4"/>
   <Objava ime="Boris Jovkovic" objava="centarhalf" pregleda="5"/>
    </div>
  );

}
export default App;