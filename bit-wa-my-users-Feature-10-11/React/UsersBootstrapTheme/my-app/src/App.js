import React, { Component } from 'react';
import data from './data/userData.js'
import Header from './component/header.js'
import Footer from './component/footer.js'
import Main from './component/main.js'

class App extends Component {
  render() {
    return [
      <Header/>,
      <Main data={data}/>,
      <Footer/>
    ]
  }
}

export default App;
