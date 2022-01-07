import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthProvider from "./context/AuthProvider";
import SingleServices from "./pages/SingleServices/SingleServices";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddServices from "./pages/addServices/addServices";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyBooking from "./pages/MyBooking/MyBooking";
import ManageBooking from "./pages/ManageBooking/ManageBooking";
import ManageServices from "./pages/ManageServices/ManageServices";
import Reviews from "./pages/Reviews/Reviews";
import DisplayReviews from "./pages/DisplayReview/DisplayReview";
import MakeAdmin from "./pages/MakeAdmin/MakeAdmin";
import Payment from "./pages/Payment/Payment";
import Map from "./pages/Map/Map";


// --------------------------------


function App() {
  return (
    <div>
       <AuthProvider>
  
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
           <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/map">
            <Map></Map>
          </Route>

          
         <Route exact path="/services">
           <Services></Services>
          </Route> 
           <Route exact path="/myOrder">
            <MyBooking></MyBooking>
          </Route> 
         
           {/*  <PrivateRoute exact path='/singlePoduct/:bikeId'>
            <SingleProduct></SingleProduct>
          </PrivateRoute>  */}
           <PrivateRoute exact path="/singleServices/:serviceId">
            <SingleServices></SingleServices>
          </PrivateRoute> 
            <Route exact path="/addServices">
            <AddServices></AddServices>
          </Route> 
            <Route exact path="/login">
            <Login></Login>
          </Route> 
            <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/manageBooking">
            <ManageBooking></ManageBooking>
          </Route> 
          <Route exact path="/manageServices">
            <ManageServices></ManageServices>
          </Route> 
            <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute> 
          <Route exact path="/addReview">
            <Reviews></Reviews>
          </Route> 
          <Route exact path='/displayReviews'>
            <DisplayReviews></DisplayReviews>
          </Route>
          <Route exact path='/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route exact path='/payment'>
            <Payment></Payment>
          </Route>
        {/* <Route path="*">
              <NotFound></NotFound>
            </Route>  */}
        </Switch>
        <Footer></Footer>
        </Router>

         </AuthProvider>
    
    </div>
  );
}

export default App;
