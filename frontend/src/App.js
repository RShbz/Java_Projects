import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';

function App() {
  return (

       <BrowserRouter> 
      <div className='App'>
        <Navbar/>
     
        <Switch>
        <Route exact path="/" component={Home}> </Route>
        <Route exact path="/user/:userid" component={User}> </Route>
        </Switch>
       
      </div>
 </BrowserRouter>
  );
}

export default App;
