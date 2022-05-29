import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header.js'
import Login from  './Login'
import UpdateProduct from './Updateproduct'
import AddProduct from './Addproduct'
import Register from './Register'

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route path="/" exact={true} ><Login/></Route>
      <Route path="/Register"><Register/></Route>
      <Route path="/AddProduct"><AddProduct/></Route>
      <Route path="/UpdateProduct"><UpdateProduct/></Route>
      <Route path="*"><Page/></Route>
      </Switch>
      </Router>
    </div>
  );
}

function Page()
{
  return(
   <h1 style={{"color":"red", "margin-top":"170px", "font-size":"80px"}}>4O4 Page <br/>Page Not Found</h1>
  );
}

export default App;
