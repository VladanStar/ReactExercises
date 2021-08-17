import React, { Component } from "react";

class NewTodo extends Component{
    state ={
        msg:"",
        done:false
    }

    setNewMsg =(e)=>{
        this.setState({
            msg:e.target.value
        })
       
    }
    addTodo =()=>{
      this.props.addIntoTodos(this.state)
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="New MSG"onChange={this.setNewMsg} />
                            <div className="input-group-append">

                                <button onClick={this.addTodo} className="btn btn-primary" on>Add MSG</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewTodo;