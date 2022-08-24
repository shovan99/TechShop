import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import Spinner from "react-bootstrap/Spinner";

const Userdashboard = () => {
  const loginuserstate = useSelector((state) => state.loginUserReducer);

  const { user, loading } = loginuserstate;

  console.log(user);
  return (
    <div style={{ marginTop: "100px" }} className="container-fluid">
      {!user ? (
        <Spinner variant="success" animation="border" />
      ) : (
        <>
          <h2 className="headingClass text-center"> User Dashboard </h2>
          <hr className="m-0" />
          <div className="row">
            <div
              className="col-2"
              style={{ backgroundColor: "#416a59", height: "76vh" }}
            >
              <div className="container">
                <Link className="btn adminDashboardButtonClass m-2 mt-4" to="/profile/update">
                  Update Profile
                </Link>
                <Link className="btn adminDashboardButtonClass m-2" to="/order">
                  Orders
                </Link>
              </div>
            </div>
            <div className="col-10 d-flex mt-4">
              <div className="container mt-5 mb-5">
                <div className="row no-gutters">
                  <div className="col-md-4 col-lg-4">
                    <img
                      src={user.profilePic}
                      alt="profile_picture"
                      className="userDashboardImage"
                    />
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="d-flex flex-column">
                      <div
                        className="d-flex flex-row justify-content-between align-items-center p-5"
                        style={{ backgroundColor: "#416a59", color: "#f5eec2" }}
                      >
                        <h2 className="display-5">{user.name.toUpperCase()}</h2>
                      </div>
                      <div
                        className="p-3"
                        style={{ backgroundColor: "#39395f", color: "#fecce2" }}
                      >
                        <h6>{user.email}</h6>
                      </div>
                      {/* <div className="d-flex flex-row text-white">
                    <div className="p-4 bg-primary text-center skill-block">
                      <h4>90%</h4>
                      <h6>Bootstrap</h6>
                    </div>
                    <div className="p-3 bg-success text-center skill-block">
                      <h4>70%</h4>
                      <h6>Jquery</h6>
                    </div>
                    <div className="p-3 bg-warning text-center skill-block">
                      <h4>80%</h4>
                      <h6>HTML</h6>
                    </div>
                    <div className="p-3 bg-secondary text-center skill-block">
                      <h4>75%</h4>
                      <h6>PHP</h6>
                    </div>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Userdashboard;
