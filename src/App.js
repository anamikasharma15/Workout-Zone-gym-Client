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

// import NotFound from "./Pages/Home/NotFound/NotFound";
// import Products from "./Pages/Home/Products/Products";
// import AddProducts from "./Pages/AddProducts/AddProducts";
// import ProductDetails from "./Pages/Home/ProductDetails/ProductDe
// import Dashboard from "./Dashboard/Dashboard";
// import MyOrders from "./MyOrders/MyOrders";
// -----------------------------------------

// import Dashbaord from "./components/Dasboard/Dashbaord";
// import Details from "./components/Details/Details";/
// import MyBookings from "./components/MyBookings/MyBookings";
// import MangeOrder from "./components/MangeOrder/MangeOrder";

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
         <Route exact path="/services">
            <Services></Services>
          </Route> 
          {/* <Route exact path="/myOrder">
            <MyOrders></MyOrders>
          </Route> 
         */}
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
          {/* <Route exact path="/manageOrders">
            <MangeOrder></MangeOrder>
          </Route> */}
            <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute> 
          {/* <Route exact path="/addService">
            <AddServices></AddServices>
          </Route> */}
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
