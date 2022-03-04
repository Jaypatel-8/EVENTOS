//import components
import { useEffect } from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Vendors from "./pages/Vendors";
import ForgotPass from "./pages/ForgotPass";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
import Login from "./pages/login/Login"
import Register from "./pages/Register";
import { loadUser } from "./actions/userActions";  
import store from "./store";
import UserProfile from "./components/UserProfile";
import BookingReq from "./pages/BookingReq";
import NewPassword from "./pages/NewPassword";
//import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  },[])
    return( 
    <>


   
    <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Services">
            <Services/>
          </Route>
          <Route path="/Vendors/all/BookingReq">
            <BookingReq/>
          </Route>
          <Route path="/Vendors/all/:category">
            <Vendors/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/SignUp">
            <Register/>
          </Route>
          <Route path="/password/forgot" exact>
           <ForgotPass/>
          </Route>
          <Route path='/password/reset/:token'>
            <NewPassword/>
          </Route>
          <Route path="/me">
            <UserProfile/>
          </Route>
        </Switch>
      </Router>
     
    </>);
};

export default App;