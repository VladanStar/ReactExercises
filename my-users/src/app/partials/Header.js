import React from 'react';
import {Link} from "react-router-dom";


const Header = (props) => {

  const { nameIcon, click, refresh, value,keyup } = props;



  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">Bit Person</Link>
        <ul className="right hide-on-med-and-down">
        <li><Link to="/about">About</Link></li>
        <li><i className="material-icons">search</i></li>
          <li><input type="text" value={value} onChange={keyup}/></li>
          <li><a onClick={refresh}><i className="material-icons">refresh</i></a></li>
          <li><a onClick={click} ><i className="material-icons">{nameIcon ? "format_list_bulleted" :  "view_module" }</i></a></li>
        </ul>
      </div>
    </nav>
  )
}


export default Header;


