import React, { useState , useEffect } from "react";
import { Link , useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { loginUser } from "../actions/authAction";

import Spinner from "react-bootstrap/Spinner"

import Alert from "react-bootstrap/Alert"

import { toast , ToastContainer } from "react-toastify"

import { loadUser } from "../actions/authAction";

import "react-toastify/dist/ReactToastify.css"

const Login = () => {
  const loginState = useSelector((state) => state.loginUserReducer);

  const { loginSuccess, loading, error, isAuthenticated } = loginState;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory()
  const user = {
    email,
    password,
  };

  useEffect(() => {
      if( isAuthenticated == true ) {
        history.push("/")
      }
  },[])
  const submitHandler = () => {
    dispatch(loginUser(user));

    // history.push("/")
  };


  const successMessage = ( message ) => {
      toast.success(message , { autoClose: 4000 })
      dispatch(loadUser())
      setTimeout(() => {
          history.push("/")
      },4000)
  }


  const errorMessage = ( message ) => {
      toast.warn(message , { autoClose: 4000 })
  }

  return (
    <div className="row justify-content-center" style={{ marginTop: "100px" }}>
      <h2 style={{ fontWeight: "bold", textAlign: "center" }} className="headingClass"> Login Here </h2>
      <hr />
      <ToastContainer/>
      { error && errorMessage("Server Error Try Again") }
      { loginSuccess && successMessage("Login Success") }
      <div className="col-lg-6">
        <div className="form-floating mb-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="floatingInput"
            className="form-control inputClass"
          />
          <label for="floatingInput"> Enter Email </label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="floatingInput"
            className="form-control inputClass"
          />
          <label for="floatingInput"> Enter Password </label>
        </div>
        <div className="d-flex ms-auto row">
          <a className="btn btn-success col-4 buttonClass" onClick={submitHandler}>
            {loading && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
            Login
          </a>
          <Link
            to="/register"
            className="text-success col-8 mt-2"
            style={{ textDecoration: "none" }}
          >
            Don't Have An Account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
