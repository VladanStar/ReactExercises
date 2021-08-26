import React, { Component } from 'react';
import data from './data/userData.js'
import Main from './component/main.js'
import Header from './component/header.js'
import Footer from './component/footer.js'

class App extends Component{
  render(){
    return[
      <Header/>,
      <Main data={data}/>,
      <Footer/>
    ]
  }
}
export default App;

// import logo from './logo.svg';
// import './App.css';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

