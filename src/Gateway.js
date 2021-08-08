import './App.css';
import { useState } from 'react';
import {Link} from 'react-router-dom'

function Gateway(props) {
 
    console.log(props.history.location.state.fromRegister.value)
    var data = props.history.location.state.fromRegister.value;

  return (
    <div className="App"><br></br>
      <h3>Select Payment Gateway</h3> <br></br>
    
    <h4> <b>You have selected <u>{data.title}</u> Course </b></h4> <br></br>
    <h5> <b>Enter Your Card Details To Make Payment:  </b></h5> <br></br>

    <label>Credit Card Number: 
     <input type="text" name="usr"/>  </label> <br></br><br></br>
     <label></label>
     <label> Expire Date :
     <input type="text" name="email" />  </label> <br></br> <br></br>
     <label>CVV :
     <input type="password" name="pwd" /> </label> <br></br> <br></br>
   
    
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
