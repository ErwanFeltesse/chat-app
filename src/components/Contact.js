import React from 'react';



const Contact = () => {
const avatar = "https://randomuser.me/api/portraits/men/58.jpg"
const name = "Mathew Spencer"
const online = true
const connect =  online ? 'status-online' : 'status-offline';

return(<div className="Contact">

   <img className="avatar" src={avatar}/>
   <div><h3 className="name">{name}</h3>
   <div className="status"> 
   <span className={connect}></span>
    <p className="status-text"> {online == true? 'online':'offline'} </p> </div>
    </div>
    </div>
);
} 

export default Contact;