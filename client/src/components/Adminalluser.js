import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeUser , loadAllUsers } from "../actions/adminAction";

import Spinner from "react-bootstrap/Spinner";

import { toast , ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

const Adminalluser = () => {
  const alluserstate = useSelector((state) => state.getAllUserReducer);
  const removeuserstate = useSelector(state => state.removeUserReducer)

  const { loading, users } = alluserstate;

  const { success , error } = removeuserstate

  const dispatch = useDispatch()

  const removeUserHandler = ( id ) => {
      dispatch(removeUser(id))
      dispatch(loadAllUsers())
  }

  const errorMessage = ( message ) => {
      toast.warn(message , { autoClose: 4000 })
  }

  const successMessage = ( message ) => {
      toast.success(message , { autoClose: 4000 })
  }

  return (
    <div style={{ marginTop:"100px" }}>
      <h2 className="headingClass text-center"> Users List </h2>
      <hr className="mt-0" />
      <ToastContainer/>
      { error && errorMessage(error) }
      { success && successMessage(success) }
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h6 className="text-center text-success"> User Name </h6>
            <hr className="mt-0" />
          </div>
          <div className="col-4">
            <h6 className="text-center text-success"> User Email </h6>
            <hr className="mt-0" />
          </div>
          <div className="col-4">
            <h6 className="text-center text-success"> Action </h6>
            <hr className="mt-0" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {loading && <Spinner animation="border" className="m-auto pe-auto" variant="success"/>}
          {users &&
            users.map((user) => (
              <>
                <div className="col-4">
                  <h6 className="text-center"> {user.name} </h6>
                </div>
                <div className="col-4">
                  <h6 className="text-center"> {user.email} </h6>
                </div>
                <div className="col-4">
                  <h6 className="text-center" style={{ cursor: "pointer" }} onClick={() => removeUserHandler(user._id)}> <i class="fa fa-trash" aria-hidden="true"></i> </h6>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Adminalluser;
