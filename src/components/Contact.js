import React from 'react';



const Contact = (props) => {
const {name, avatar, online} = props;
return(
<div className="Contact">
   <img className="avatar" src={avatar}/>
   <div>
       <h3 className="name">{name}</h3>
           <div className="status"> 
              <span className={props.online ? 'status-online' : 'status-offline'}></span>
               <p className="status-text"> {online == true? 'online':'offline'} </p> 
          </div>
  </div>
</div>
);
} 

export default Contact;