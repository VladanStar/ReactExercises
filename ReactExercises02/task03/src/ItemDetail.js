import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./App.css"

function ItemDetail(context){

    useEffect(()=>{
        fetchItems();
    },[]);
    const[item, setItem]=useState([]);

    const fetchItems =async ()=>{

        const formData = new FormData();
        formData.append("key","93871-11743-03814-00306");
        formData.append("method","getProizvod");
        formData.append("proizvod_id", context.match.params.id);

        const data = await fetch(`https://zadatak.singidunum.ac.rs/programiranje-mobilnih-aplikacija/api/`,
        {method:"POST",
        body:formData
    });
    
    const internalItem = await data.json();
   // console.log(internalItem);
    setItem(internalItem.data[0]);
    //setItems(intenalItems.data[0]);
    }
    return(
        <div className="bojaSlova">
        <h1 key={item.proizvod_id}>
        {item.naziv}<br/> 
        {item.opis}<br/>  
        {item.cena}<br/>  
        {item.specifikacija}<br/>  
        {item.na_stanju}<br/>  
        </h1>      
         </div>
    );
}
export default ItemDetail;