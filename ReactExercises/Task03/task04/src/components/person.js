import React from "react";
const Person = () => {
  // const myStyles ={
  //     card: {
  //         background:"lightyellow",
  //         color:"lightblue",
  //         fontSize:"25px",
  //         textAlign:"center",
  //         width: "400px"
  //     }
  //}
  // return (<div style ={myStyles.card}>

  return (
    <div className="row">
      <div className="card">
        <div className="card-header">
          <h3>Vladan</h3>
        </div>
        <div className="card-body">
          <h3>development</h3>
        </div>
        <div className="card-footer">
          <h3>male</h3>
        </div>
      </div>
    </div>
  );
};
export default Person;
