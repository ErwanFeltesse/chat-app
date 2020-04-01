import React from 'react';
import users from "./ContactList"

const Contact = () => (

<ul>
  {users.map(user=> (
<div className="Contact" key = {user.name}>
   <img className="avatar" alt="avatar" src={user.avatar}/>
   <div>
       <h3 className="name">{user.name}</h3>
           <div className="status"> 
              <span className={user.online ? 'status-online' : 'status-offline'}></span> 
               <p className="status-text"> {user.online === true? 'online':'offline'} </p> 
          </div>
  </div>
</div>

))
} 
</ul>
)

export default Contact;