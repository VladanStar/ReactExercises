import React, { Component } from 'react';
import List from './list.js'
const Main = (props) => {
    console.log(props);
    const main = props.data;
    console.log(main)
    return (
        <div className="container">
            <div className="row">
                <List data={main} />
                
            </div>
        </div>
    )

}
export default Main;