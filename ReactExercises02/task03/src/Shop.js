import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./App.css"

function Shop(){

    useEffect(()=>{
        fetchItems();
    },[]);
    const[items, setItems]=useState([]);

    const fetchItems =async ()=>{

        const formData = new FormData();
        formData.append("key","93871-11743-03814-00306");
        formData.append("method","getAllOfProizvod");

        const data = await fetch(`https://zadatak.singidunum.ac.rs/programiranje-mobilnih-aplikacija/api/`,
        {method:"POST",
        body:formData
    });
    
    const internalItems = await data.json();
    console.log(internalItems);
    setItems(internalItems.data[0]);
    //setItems(intenalItems.data[0]);
    }
    return(
        <div>
          {items.map(item=>(
              <h1 key={item.proizvod_id}>
              <Link to={`/shop/${item.proizvod_id}`}>{item.naziv}</Link>
              </h1>
          ))}
        </div>
    );
}
export default Shop;