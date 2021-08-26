import React from 'react'


const ListThumb = (props)=>{
    const{email, name, last, dob, picture}=props.data
    // console.log(email, name, dob, picture);
    
   return(
    
     <li className="collection-item avatar"   >
    <div className={props.data.getGender()}>

      <img src={picture.medium} alt="" className="circle"  />
      <span className="title">{name} {last}</span>
      
      <p><i className="material-icons">email</i> {props.data.getEmail()} </p> 
      <p><i className="material-icons">cake</i> {props.data.getDate()} </p>
    </div>
      
     
    </li>
   )

}

export default ListThumb