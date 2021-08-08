import './App.css';
import { useState } from 'react';
import {Link} from 'react-router-dom'

function LandingPage(props) {

  const [creds, setcreds] = useState({email:"T.@g.com", pwd:"1234"})
 

  const handleChange = (event)=>{
    if(event.target.name =="email"){
      setcreds({...creds,email:event.target.value})
    }else{
      setcreds({...creds,pwd:event.target.value})
    }
  }
  var RegisterData
  if(props.history.location.state!=undefined){
     RegisterData=props.history.location.state.fromRegister
  }

  
  console.log(RegisterData)
  const handleSubmit = (event) => {
    event.preventDefault()
    if(RegisterData && creds.email.includes(RegisterData.email) && creds.pwd.includes(RegisterData.pwd)){
      window.location.href = "/home"
    }else{
      window.alert("Invalid email?Password")
    }
  }

  console.log(props)

  return (
    <div className="App">
    
     <label>Email : 
     <input type="text" name="email" onChange={handleChange}/>  </label> <br></br>
     <label>Password
     <input type="password" name="pwd" onChange={handleChange}/> </label> <br></br>
     <button className="button" type="submit" onClick={handleSubmit} >SUBMIT </button>
      
    <Link to="/register" >New User ?</Link>

    </div>
  );
}

export default LandingPage;
