import React, { Component } from 'react';
import ListItem from './listItems.js'

const List = (props) => {
    console.log(props);
    const lists = props.data;
    return (
        <div>
            {lists.map((list, index) => <ListItem key={index} email={list.email} name={list.name.first} lastname={list.name.last} dob={list.dob} picture={list.picture.large} />)}
        </div>
    )


}

export default List;