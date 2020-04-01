import React from 'react';
import PropTypes from 'prop-types';


const Contact = (props) => {
const {name, avatar, online} = props; 
return(
<div className="Contact">
   <img className="avatar" alt="avatar" src={avatar}/>
   <div>
       <h3 className="name">{name}</h3>
           <div className="status"> 
              <span className={props.online ? 'status-online' : 'status-offline'}></span> 
               <p className="status-text"> {online === true? 'online':'offline'} </p> 
          </div>
  </div>
</div>
);
} 
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool
}


export default Contact;