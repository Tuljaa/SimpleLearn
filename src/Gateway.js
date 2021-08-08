import './App.css';
import { useState } from 'react';
import {Link} from 'react-router-dom'

function Gateway(props) {
 
    console.log(props.history.location.state.fromRegister.value)
    var data = props.history.location.state.fromRegister.value;

  return (
    <div className="App"><br></br>
      <h4>Select Payment Gateway</h4>
    
    <h5>You have selected {data.title} Course</h5>
   
    
     <Link  
       to={{
        pathname: "/otp",
        state: {
          fromGate: "hh",
        },
      }}
       >
        <button className="button"  >
        
          Payment Gateway  </button>   </Link> 

    </div>
  );
}

export default Gateway;
