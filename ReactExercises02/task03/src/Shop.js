import React, {useState, useEffect} from "react";
import "./App.css"

function Shop(){

    useEffect(()=>{
        fetchItems();
    },[]);

    const fetchItems =async ()=>{

        const formData = new FormData();
        formData.append("key","93871-11743-03814-00306");
        formData.append("method","getAllOfProizvodi");

        const data = await fetch(`https://zadatak.singidunum.ac.rs/programiranje-mobilnih-aplikacija/api/`,
        {method:"POST",
        body:formData
    });
    
    const internalItems = await data.json();
    console.log(internalItems);
    //setItems(intenalItems.data[0]);
    }
    return(
        <div>
            <h1>Prodavnica</h1>
        </div>
    );
}
export default Shop;