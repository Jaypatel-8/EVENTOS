//import components
import Slider from "./components/Slider";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Vendors from "./pages/Vendors";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/login/Login"
import Register from "./pages/Register";
  



const App = () => {
    return( 
    <>
    {/* <Home/> */}
    {/* <Slider/> */}
     {/* <ContextProvider> */}
    <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Services">
            <Services/>
          </Route>
          
           <Route path="/Vendors">
            <Vendors/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Register">
            <Register/>
          </Route>
        </Switch>
      </Router>
      {/* </ContextProvider>  */}
    </>);
};

export default App;