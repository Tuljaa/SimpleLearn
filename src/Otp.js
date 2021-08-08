import './App.css';
import { useState } from 'react';

function Otp(props) {
 
    console.log(props)
    const [otp, setotp] = useState({otp:0})

    const handleChange =(event) =>{
        setotp({...otp,otp:parseInt(event.target.value)})
    }

    const handleClick = ()=>{
        if(otp.otp==123456){
            console.log("matched")
            window.location.href = "/home"
            
        }else{
            window.alert("Wrong OTP");
           // window.Location.href="/"
        }
    }

    console.log(otp)
    
  return (
    <div className="App"><br></br>
      <h4>Select Payment Gateway</h4>
    
      <label>Enter OTP : 
     <input type="text" onChange={handleChange}/>  </label> <br></br>
        <button className="button" onClick={handleClick}> Continue   </button>
    </div>
  );
}

export default Otp;
