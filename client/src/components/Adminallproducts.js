import React , { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllProducts , removeProduct } from "../actions/adminAction";

import Spinner from "react-bootstrap/Spinner"

import Alert from "react-bootstrap/Alert"

import { Link } from "react-router-dom"

const Adminallproducts = () => {

  const allproductsstate = useSelector((state) => state.getAllProductsReducer);
  const removeproductstate = useSelector(state => state.removeProductReducer)

  const dispatch = useDispatch()
  const { success, loading, products, error } = allproductsstate;
  const { rmsuccess , rmloading , rmerror } = removeproductstate
  

  const removeHandler = ( id ) => {
      dispatch(removeProduct(id))
      dispatch(getAllProducts())
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <h2 className="headingClass text-center"> All Products </h2>
      <hr className="mt-0" />

      { rmsuccess && <Alert variant="success"> Product Removed </Alert> }
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h6 className="text-success text-center"> Product Name </h6>
            <hr className="mt-0" />
          </div>
          <div className="col-3">
            <h6 className="text-success text-center"> Product Category </h6>
            <hr className="mt-0" />
          </div>
          <div className="col-3">
            <h6 className="text-success text-center"> Product Price </h6>
            <hr className="mt-0" />
          </div>
          <div className="col-3">
            <h6 className="text-success text-center"> Action </h6>
            <hr className="mt-0" />
          </div>
        </div>
      </div>

      { loading && <Spinner animation="border" className="ms-auto" variant="success"/> }

      {products &&
        products.map((product) => (
          <>
            <div className="container">
              <div className="row mb-2">
                <div className="col-3">
                  <h6 className="text-center"> {product.name} </h6>
                </div>
                <div className="col-3">
                  <h6 className="text-center">
                    {product.category}
                  </h6>
                </div>
                <div className="col-3">
                  <h6 className="text-center"> {product.price} </h6>
                </div>
                <div className="col-3 d-flex">
                      <i className="fa fa-trash cursor-pointer m-auto" style={{ cursor: "pointer" }} onClick={() => removeHandler(product._id)} aria-hidden="true"></i>
                      <Link to={`/product/${product._id}`} style={{ textDecoration: "none" , color: "inherit" , margin: "auto" }}><i className="fa fa-edit cursor-pointer m-auto" style={{ cursor: "pointer" }} aria-hidden="true"></i></Link>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default Adminallproducts;
