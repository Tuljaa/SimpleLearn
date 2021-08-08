import './App.css';
import LandingPage from './LandingPage';
import RegisterPage from './RegisterPage'
import HomePage from './HomePage';
import Gateway from './Gateway'
import Otp from './Otp';

import {Route} from 'react-router-dom'
function App() {
 
  return (
    <div className="App">
      <header className="App-header">
         <h1>Simple Learn Courses</h1>
         <Route exact path="/" component={LandingPage}></Route>
         <Route path="/register" component={RegisterPage}></Route>
         <Route path="/home" component={HomePage}></Route>
         <Route path="/gateway" component={Gateway}></Route>
         <Route path="/otp" component={Otp}></Route>
      </header>
    </div>
  );
}

export default App;
