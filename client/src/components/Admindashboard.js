import React , { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  loadAllUsers,
  getAllProducts,
  getAllOrders,
} from "../actions/adminAction";

import { Link } from "react-router-dom";

const Admindashboard = () => {
  const allusersstate = useSelector((state) => state.getAllUserReducer);
  const allordersstate = useSelector(state => state.loadOrdersReducer)

  const { users } = allusersstate;

  const { orders } = allordersstate

  const dispatch = useDispatch();


  const allproductsstate = useSelector(state => state.getAllProductsReducer)

  const { products } = allproductsstate

  const usersHandler = () => {
    dispatch(loadAllUsers());
  };

  const productsHandler = () => {
    dispatch(getAllProducts());
  };

  const ordersHandler = () => {
    dispatch(getAllOrders());
  };

  useEffect(() => {
      dispatch(getAllProducts())
  },[])

  const { innerWidth } = window

  return (
    <div className="container-fluid">
      <h2 className="text-center headingClass" style={{ marginTop: "100px" }}>
        Admin Dashboard
      </h2>
      <hr className="mb-0" />
      {/* <div className="col-6" style={{ marginLeft: "16%" }}>
          <Link
            className="btn mb-2 buttonClass"
            to="/admin/users"
            onClick={usersHandler}
          >
            Users List
          </Link>

          <br/>

          <Link className="btn mb-2 buttonClass" to="/product/create">
            Add Product
          </Link>

          <br/>

          <Link
            className="btn mb-2 buttonClass"
            to="/orders/all"
            onClick={ordersHandler}
          >
            All Orders
          </Link>
          <br/>
          <Link
            className="btn mb-2 buttonClass"
            to="/admin/products"
            onClick={productsHandler}
          >
            All Products
          </Link>
        </div>  */}
      <div className="row">
        <div
          className="col-2"
          style={{ backgroundColor: "#416a59", height: "76vh" }}
        >
          <div className="container">
            <Link className="btn adminDashboardButtonClass mt-4 m-2" to="/product/create">
              Add Product
            </Link>
            <Link className="btn adminDashboardButtonClass m-2" onClick={productsHandler} to="/admin/products">
              All Products
            </Link>
            <Link className="btn adminDashboardButtonClass m-2" onClick={ordersHandler} to="/orders/all">
              All Orders
            </Link>
            <Link className="btn adminDashboardButtonClass m-2" onClick={usersHandler} to="/admin/users">
              User List
            </Link>
          </div>
        </div>
        <div className="col-8">
          <div className="d-flex">
            <div
              className="card mt-4 m-2"
              style={{ maxWidth: "540px", backgroundColor: "#416a59" }}
            >
              <div className="row g-0 p-2">
                <div className="col-md-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAUyVI5pBMWTfCP_irIrOPwGwmDpx6qdIMIQbE2zmbZMb6FZjEt1QJMJRwl3Dt9TMgSeg&usqp=CAU"
                    className="img-fluid rounded-start"
                    alt="admin_dashboard_card_image"
                    style={{ height: "120px", width: "200px" }}
                  />
                </div>
                <div className="col-md-8">
                  <h4
                    className="card-title text-center"
                    style={{ color: "#f5eec2" }}
                  >
                    Total Products
                  </h4>
                  <h2
                    className="card-text text-center"
                    style={{ color: "#f5eec2" }}
                  >
                    { products ? products.length : "Loading...." }
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
