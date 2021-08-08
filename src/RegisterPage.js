import './App.css';
import { useState } from 'react';
import {Link} from 'react-router-dom'
function RegisterPage(props) {

  const [creds, setcreds] = useState({email:"T.@g.com", pwd:"1234"})

  const handleChange = (event)=>{
    if(event.target.name =="email"){
      setcreds({...creds,email:event.target.value})
    }else{
      setcreds({...creds,pwd:event.target.value})
    }

  }

  return (
    <div className="App">
     <h5>Register</h5>
     <label>Username : 
     <input type="text" name="usr"/>  </label> <br></br>
     <label></label>
     <label>Email : 
     <input type="text" name="email" onChange={handleChange}/>  </label> <br></br>
     <label>Password
     <input type="password" name="pwd" onChange={handleChange}/> </label> <br></br>
    
     <Link  
       to={{
        pathname: "/",
        state: {
          fromRegister: creds,
        },
      }}
       >
        <button className="button"  >
        
          SUBMIT </button>   </Link> 

    </div>
  );
}

export default RegisterPage;
