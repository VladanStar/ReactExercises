import React, { Component } from 'react';


const ListItem = (props) => {
    console.log(props);
    
    const { email, name, lastname, dob, picture } = props;
  
    const date = (dob) => {
        const date = new Date(dob);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        return `${year}-${month}-${day}`;
    }

    const emailDot = (email) => {
        const monkey = email.indexOf('@');
        const string = email.substring(0, monkey) + '...';
        return string;



    }
    return (

        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={picture}></img>
                    <span className="card-title">{emailDot(email)}</span>
                </div>
                <div className="card-content">
                    <p>Name: {name} {lastname}</p>
                    <p>Date of Birth: {date(dob)}</p>
                </div>
                <div className="card-action">
                    <a href="#">This is a link</a>
                </div>
            </div>
        </div>

    )
}


export default ListItem