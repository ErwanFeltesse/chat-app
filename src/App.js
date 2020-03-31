import React from 'react';
import Contact from './components/Contact'
import './components/Contactstyle.css';



function App() {
  return (
    <div className="App">
  <Contact
  
  avatar="https://randomuser.me/api/portraits/men/58.jpg"
  name = "Mathew Spencer"
  online = {true}
   />
   <Contact
   avatar = "https://randomuser.me/api/portraits/men/13.jpg"
   name = "Alvin Lawrence"
   online = {false}/>
   <Contact
   avatar ="https://randomuser.me/api/portraits/men/93.jpg"
   name = "Cameron Pierce"
   online ={true}/>

  </div>
  );
}

export default App;


