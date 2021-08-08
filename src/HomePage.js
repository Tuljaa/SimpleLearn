import './App.css';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
function HomePage() {

    const [appState, setAppState] = useState({
        repos: null,
      });

    useEffect(() => {
       
        const apiUrl = `https://s3-ap-southeast-1.amazonaws.com/he-public-data/courses26269ff.json`;
        fetch(apiUrl)
          .then((res) => res.json())
          .then((repos) => {
            setAppState({ repos: repos });
          });
      }, [setAppState]);

      console.log(appState)


  return (
    <div  >
      {
          (appState.repos!=null)?
           appState.repos.map(
               (value,key) => {
                   return(
                       <>
                    <div key={key} style={{color:'black',width:'30%',height:'30%',display:'block'}} >
                    <div className="container">
                        <img src={value.thumbnailURL} alt={value.id} style={{width:'50%',height:'50%'}} /><hr></hr>
                        <h2 ><b>{value.title}</b></h2> <hr></hr>
                        <p>Rs {value.price}/-</p> 
                        
                            <Link  
                            to={{
                                pathname: "/gateway",
                                state: {
                                fromRegister: {value},
                                },
                            }}
                            >
                        <button className="button"   > Buy </button> </Link>
                    </div>
                    </div>  
                   
                    <br></br>
                    </>  
                   )
               }
           )
          :<h5>NULL</h5>
      }

    </div>
  );
}

export default HomePage;
