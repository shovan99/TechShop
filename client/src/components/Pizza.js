import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../actions/cartAction";

import { getProduct } from "../actions/pizzaAction";

import { Link } from "react-router-dom"

const Pizza = ({ pizza }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(2);

  console.log(pizza);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  function addToCartFunc() {
    dispatch(addToCart(pizza, quantity));
  }

  const productDetailsHandler = ( id ) => {
      dispatch(getProduct(id))
  }
  return (
    <>
      <div
        className="card rounded shadow-lg bg-body m-4 col-lg-4 col-md-6 col-sm-12 p-0"
        
        // onClick={productDetailsHandler(pizza._id)}
        style={{
          width: "20rem",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid #416a59"
        }}
      >
        <div
          className="card-header m-0"
          style={{ width: "20rem" }}
          // onClick={handleShow}
        >
          {pizza.name}
        </div>
        <div
          className="card-body"
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={pizza.image}
            className="img-fluid card-img-top"
            style={{ width: "200px", height: "200px" }}
            alt="pizza_logo"
          />
        </div>
        <div className="d-flex flex-row" style={{ width: "18rem" }}>
          {/* <div className="w-100 m-2">
            <select className="form-select">
              <option selected disabled>
                Varient
              </option>
              <option> 2 </option>
              <option> 4 </option>
              <option> 6 </option>
            </select>
          </div> */}
          {/* <i class="fa fa-plus" aria-hidden="true"></i> */}
        </div>
        <div className="d-flex flex-row" style={{ width: "18rem" }}>
          <div className="card-title w-100 m-2 fw-bolder">
            Price: <span className="text-success"> {pizza.price} </span>
          </div>
          <Link
            className="btn w-100 m-2 btn-sm"
            to={`/product/details/${pizza._id}`}
            style={{ backgroundColor: "#416a59" , color: "#f5eec2" }}

            onClick={productDetailsHandler(pizza._id)}
            // onClick={addToCartFunc}
          >
            View Details
          </Link>
        </div>
      </div>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {pizza.name} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Save changes</Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default Pizza;
