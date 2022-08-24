import React , { useEffect } from "react"
import "./App.css";

import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";

import Home from "./components/Home";

import { BrowserRouter, Link, Route } from "react-router-dom";

import Cart from "./components/Cart";

import Register from "./components/Register"

import Login from "./components/Login"

import Order from "./components/Order"

import store from "./store"

import { loadUser } from "./actions/authAction"

import Admindashboard from "./components/Admindashboard"

import Adminalluser from "./components/Adminalluser"

import Productcreate from "./components/Productcreate"

import Adminallproducts from "./components/Adminallproducts";

import Adminallorders from "./components/Adminallorders";

import Footer from "./components/Footer";

import Updateproduct from "./components/Updateproduct";

import Userdashboard from "./components/Userdashboard";

import Productdetails from "./components/Productdetails";

import Updateprofile from "./components/Updateprofile";

function App() {
  useEffect(() => {
      store.dispatch(loadUser())
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/admin/dashboard" component={Admindashboard}/>
          <Route exact path="/user/dashboard" component={Userdashboard}/>
        <div className="container">
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/order" component={Order}/>
          <Route exact path="/admin/users" component={Adminalluser}/>
          <Route exact path="/product/create" component={Productcreate}/>
          <Route exact path="/admin/products" component={Adminallproducts}/>
          <Route exact path="/orders/all" component={Adminallorders}/>
          <Route exact path="/product/:id" component={Updateproduct}/>
          <Route exact path="/product/details/:id" component={Productdetails}/>
          <Route exact path="/profile/update" component={Updateprofile}/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
