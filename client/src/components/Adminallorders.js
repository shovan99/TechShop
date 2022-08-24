import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Spinner from "react-bootstrap/Spinner"

const Adminallorders = () => {
  const loadordersstate = useSelector((state) => state.loadOrdersReducer);

  const { success, orders, loading, error } = loadordersstate;

  return (
    <div style={{ marginTop: "100px" }}>
      <h2 className="text-center headingClass"> All Orders </h2>
      <hr className="mt-0" />

      { loading && <Spinner variant="success" className="ms-auto" animation="border"/> }
      <div className="container">
        <div className="row">
          <div className="col-2">
            <h6 className="text-success text-center"> Name </h6>
            <hr className="mt-0" />
          </div>
          <div className="col-2">
            <h6 className="text-success text-center"> Email </h6>
            <hr className="mt-0" />
          </div>
          <div className="col-2">
            <h6 className="text-success text-center"> Ordered Items </h6>
            <hr className="mt-0" />
          </div>
          <div className="col-2">
            <h6 className="text-success text-center"> Shipping Address </h6>
            <hr className="mt-0" />
          </div>
          <div className="col-2">
            <h6 className="text-success text-center"> Total Amount </h6>
            <hr className="mt-0" />
          </div>
          <div className="col-2">
            <h6 className="text-success text-center"> Delivery Status </h6>
            <hr className="mt-0" />
          </div>
        </div>
      </div>
      <div>
        {orders &&
          orders.map((order) => (
            <>
              <div className="row">
                <div className="col-2">
                  <h6 className="text-center"> {order.name} </h6>
                </div>
                <div className="col-2">
                  <h6 className="text-center"> {order.email} </h6>
                </div>
                <div className="col-2">
                  {order.orderItems.map((orderItem) => (
                    <h6 className="text-center"> {orderItem.name} </h6>
                  ))}
                </div>
                <div className="col-2">
                  <h6 className="text-center">
                    <span className="text-success"> Street: </span>
                    {order.shippingAddress.street}
                  </h6>
                  <h6 className="text-center">
                    <span className="text-success"> City: </span>
                    {order.shippingAddress.city}
                  </h6>
                  <h6 className="text-center">
                    <span className="text-success"> Country: </span>
                    {order.shippingAddress.country}
                  </h6>
                  <h6 className="text-center">
                    <span className="text-success"> Zip: </span>
                    {order.shippingAddress.pincode}
                  </h6>
                </div>
                <div className="col-2">
                  <h6 className="text-center">
                  ₹ {order.orderAmount}
                  </h6>
                </div>
                <div className="col-2">
                  <h6 className="text-center">
                    {order.isDelivered ? "Delivered" : "Placed"}
                  </h6>
                </div>
              </div>
              <hr className="mt-0 mb-2" />
            </>
          ))}
      </div>
    </div>
  );
};

export default Adminallorders;
