import React, { Component } from 'react';
import ListItem from './list.js'

const ListUsers = (props) => {
    const lists = props.data;
   console.log(lists);
   
    
    return (
       
        <div className="card">
             <div className="row">
            {lists.map((list, index) => <ListItem key={index} email={list.email} name={list.name.first} lastname={list.name.last} dob={list.dob} picture={list.picture.large} />)}
        </div>
          </div>
    )
}

export default ListUsers