import React from "react";
import "../App.css";

import { useSelector, useDispatch } from "react-redux";

import { Link, useLocation } from "react-router-dom";

import { logoutUser } from "../actions/authAction";

import {
  Navbar as myNavbar,
  Container,
  Offcanvas,
  NavDropdown,
  Nav,
  Button,
} from "react-bootstrap";

const Navbar = ({ history }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const cartstate = useSelector((state) => state.addToCartReducer);

  const loginState = useSelector((state) => state.loginUserReducer);

  const { loading, user } = loginState;

  const { innerWidth } = window;

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  const isActive = (getPath, path) => {
    if (getPath === path) {
      return { textDecoration: "underline", color: "#a9c25d" };
    } else {
      return { textDecoration: "none", color: "#f5eec2" };
    }
  };
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg shadow-lg p-3 bg-body rounded">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {user ? (
              <>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item me-4">
                      <Link className="nav-link bg-primary rounded cursor-pointer text-light" to="/order"> Orders </Link>
                  </li>
                  { user.role==="user" && (
                    <li className="nav-item me-4">
                        <Link className="nav-link bg-primary rounded cursor-pointer text-light" to="/admin/dashboard"> Admin Dashboard </Link>
                    </li>
                  ) }
                  <li className="nav-item me-4">
                    <Link className="nav-link text-light bg-primary rounded position-relative" to="/cart">
                      
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"> {cartstate.cartItems.length} </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bg-warning rounded" style={{ cursor: "pointer" }} onClick={logoutHandler} aria-current="page" to="/login">
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </nav> */}

      <nav
        className="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0"
        style={{ backgroundColor: "#416A59" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className="navbar-brand-logo">T</span>ech
            <span style={{ fontSize: "28px" }}>S</span>hop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="d-flex justify-content-start align-items-center">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link
                  className="nav-link px-3"
                  style={isActive(location.pathname, "/")}
                  to="/"
                >
                  Home
                </Link>
              </li>

              {user ? (
                <>
                  <li className="nav-item">
                      <Link
                        className="nav-link px-3"
                        to="/user/dashboard"
                        style={isActive(location.pathname , "/user/dashboard")}
                      >
                          User Dashboard
                      </Link>
                  </li>

                  {user.role === "admin" && (
                    <li className="nav-item">
                      <Link
                        className="nav-link px-3"
                        style={isActive(location.pathname, "/admin/dashboard")}
                        to="/admin/dashboard"
                      >
                        Admin Dashboard
                      </Link>
                    </li>
                  )}

                  <li className="nav-item">
                      <Link className="nav-link position-relative px-3" style={isActive(location.pathname , "/cart")} to="/cart">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>   <p className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-success"> {cartstate.cartItems.length} </p>  Cart
                      </Link>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link px-3" onClick={logoutHandler}>
                      <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
                      </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link px-3"
                      style={isActive(location.pathname, "/login")}
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  {/* <li className="nav-item active">
                    <a className="nav-link px-3" href="#!">
                      Signup
                    </a>
                  </li> */}
                </>
              )}
            </ul>

            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link pe-3" href="#!">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#!">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ps-3" href="#!">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
