import React from 'react';
import {Link} from "react-router-dom";

const ListCard = (props) => {
  const { id, email, name,last, dob, picture } = props.data



  return (

    <div className="col s12 m4" >
      <div className='card'  >
        <div className={props.data.getGender()}>
          <div className="card-image">
            <img src={picture.large} />
            <span className="card-title">{name} {last}</span>
          </div>
          <div className="card-content">
            <p>{props.data.getEmail()}</p>
            <p>{props.data.getDate()}</p>
            <div className="card-action">
              <Link  to={`/SingleUser/${id}`} props={props.data}>View Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default ListCard