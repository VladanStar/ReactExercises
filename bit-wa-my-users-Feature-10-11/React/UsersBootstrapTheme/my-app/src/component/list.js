import React, { Component } from 'react';

const ListItem = (props) => {
    
    const { email, name, lastname, dob, picture } = props;
    console.log(props);
    return (
        <div className="col-4">
            <img className="card-img-top" src={picture} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{name}{lastname}</h5>
                <p className="card-text">{email}</p>
                <p className="card-text">{dob}</p>

            </div>
        </div>
    )
}

export default ListItem;



