import React, {Component} from 'react';
import './App.css';
import Jumbotron from "./Jumbotron";
import NewTodo from "./NewTodo";
import TodoList from './TodoList';



class App extends Component {

  state = {
    todos:[
      {
        id:1,
        msg:'Uciti React',
        done:false
      },
      {
        id:2,
        msg:"Uciti JavaScript",
        done:true
      }
    ]
  }

  addIntoTodos = (todo)=>{
    todo.id= Math.floor(Math.random()*(10000-10)-10)
    //this.props.addTIntotodos(this.state);
    this.setState({todos:[...this.state.todos, todo]});
  }
  markTodo = (index)=>{
    const copyTodos =[...this.state.todos];
    copyTodos[index].done =!copyTodos[index].done;
    this.setState({todos:copyTodos})
  }

  deleteTodo = (index)=>{
    const copyTodos =[...this.state.todos];
    copyTodos.splice(index,1);
    this.setState({todos:copyTodos});

  }
  
  render(){
    return(
      <div className="wrapp">

        <Jumbotron />
        <NewTodo addIntoTodos={this.addIntoTodos} />
        <TodoList deleteTodo={this.deleteTodo} todos={this.state.todos} markTodo={this.markTodo}/>
      </div>

    )
  }

}

export default App;
