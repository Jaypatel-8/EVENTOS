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
    Redirect,
    
  } from "react-router-dom";
import Login from "./pages/login/Login"
import Register from "./pages/Register";
import { loadUser } from "./actions/userActions";  
import store from "./store";
import UserProfile from "./components/UserProfile";

import ProfileDetails from "./pages/ProfileDetails"
import NewPassword from "./pages/NewPassword";
// import User from "../../server/models/User";
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
          <Route path="/VendorDetails/:id">
            <ProfileDetails/>
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
          {/* <ProtectedRoute> */}
          {/* </ProtectedRoute> */}
        </Switch>
      </Router>
     
    </>);
};

export default App;