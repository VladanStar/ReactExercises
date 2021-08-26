import React, { Component } from 'react';


class Header extends Component{
  render(){
      return(
        <nav className="navbar navbar-light  bg-primary " >
        <a className="navbar-brand"  >
          <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""></img>
          Users
        </a>
      </nav>
      )
  }

}

export default Header