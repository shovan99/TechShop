import React, { useState , useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { registerUser } from "../actions/authAction";

import { useDispatch, useSelector } from "react-redux";

import Spinner from "react-bootstrap/Spinner";

import Alert from "react-bootstrap/Alert";

import { toast , ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ image , setImage ] = useState("")

  const [ url , setUrl ] = useState("")

  const dispatch = useDispatch();

  const history = useHistory();

  const authState = useSelector((state) => state.loginUserReducer);

  const { registerSuccess, loading, error } = authState;

 
  useEffect(() => {
      if( url ) {
        const data = {
          name: name,
          email: email,
          password: password,
          profilePic: url
        }
        
        dispatch(registerUser(data))
      }
  },[url])

  // const submitHandler = () => {
  //   dispatch(registerUser(data));
  // };


  const successMessage = ( message ) => {
      toast.success(message , { autoClose: 4000 })
      setTimeout(() => {
         history.push("/login")
      },4000)
  }


  const errorMessage = ( message ) => {
      toast.warn(message , { autoClose: 4000 })
  }
  

  const uploadImage = async(  ) => {
    const data = new FormData()
        data.append("file" , image)
        data.append("upload_preset" , "techshop")
        data.append("cloud_name" , "techshopodgi2")
        await fetch("https://api.cloudinary.com/v1_1/techshopodgi2/image/upload" , {
            method: "POST",
            body: data
        }).then(response => response.json()).then(data => {
            if( data.error ) {
                errorMessage("Profile Picture Upload Error")
                console.log(data.error)
                return
            }
            setUrl(data.url)
        }).catch(err => {
            console.log(err)
            errorMessage("Picture Error")
        })
  }

  return (
    <div className="row justify-content-center" style={{ marginTop: "100px" }}>
      <h2 style={{ textAlign: "center", fontWeight: "bold" }} className="headingClass">
        Register Here
      </h2>
      <hr />
      <ToastContainer/>
      {error && errorMessage("Server Error Try Again")}
      {registerSuccess && successMessage("Register Success")}
      <div className="col-lg-6 justify-content-center">
        <div className="form-floating mb-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="floatingInput"
            className="form-control inputClass"
          />
          <label for="floatingInput"> Enter Name </label>
        </div>
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
        <div className="form-floating mb-2">
          <input type="password" id="floatingInput" className="form-control inputClass" />
          <label for="floatingInput"> Confirm Password </label>
        </div>

        <div className="mb-2">
            <label className="form-label"> Profile Picture </label>
            <input type="file" className="form-control inputClass" onChange={e => setImage(e.target.files[0])}/>
        </div>
        <div className="d-flex row ms-auto mb-4">
          <a className="btn btn-success col-4 buttonClass" onClick={uploadImage}>
            {loading && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
            Register
          </a>
          <Link
            className="mt-2 col-8 text-success"
            to="/login"
            style={{ cursor: "pointer", textDecoration: "none" }}
            onClick={console.log("")}
          >
            Already Have An Account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
