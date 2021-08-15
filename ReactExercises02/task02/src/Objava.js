import React from "react";

function Objava(props){
    return(
        <div className="objava">
            <h3>{props.ime}</h3>
            <p>{props.objava}</p>
            <h4>{props.pregleda}</h4>
        </div>
    )
}
export default Objava;