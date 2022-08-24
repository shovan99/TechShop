import React , { useState , useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Spinner from "react-bootstrap/Spinner";

import axios from "axios"

import { addToCart } from "../actions/cartAction";

const Productdetails = ({ match }) => {
  const [ product , setProduct ] = useState({})
  const [ productLoading , setProductLoading ] = useState(false)

  const [ quantity , setQuantity ] = useState(1)

  const dispatch = useDispatch()

  const loginuserstate = useSelector(state => state.loginUserReducer)

  const { user } = loginuserstate

  const increaseQuantity = (  ) => {
      if( quantity < 10 ) {
          setQuantity(quantity+1)
      }
  }

  const decreaseQuantity = (  ) => {
      if( quantity > 1 ) {
          setQuantity(quantity-1)
      }
  }

  const addToCartHandler = (  ) => {
      dispatch(addToCart(product , quantity))
  }

  useEffect(() => {
      const loadProduct = async(  ) => {
          setProductLoading(true)
          const response = await axios.get(`/api/product/${match.params.id}`)
          if( response.data.product ) {
              setProduct(response.data.product)
              setProductLoading(false)
          }
      }
      loadProduct()
  },[])

  return (
    <div style={{ marginTop: "100px" }}>
        {productLoading ? (
          <Spinner variant="success" className="m-auto p-auto" animation="border" />
        ) : (
          <div className="row">
            <div className="col-4">
              <img alt="product_image" style={{ margin: "20px" , height: "40vh" , width: "20vw" , border: "2px solid #416a59" }} src={product.image} />
            </div>
            <div className="col-8">
              <h2 className="headingClass text-center"> {product.name} {quantity} </h2>
              <hr/>
              <h4> Product Description: </h4>
              <hr/>
              <h6> {product.description} </h6>
              <hr/>
              <div className="d-flex">
              <h4 className="headingClass"> Quantity: </h4>
              <div className="d-flex mx-4" style={{ justifyContent: "space-evenly" }}>
                  <i className="fa fa-plus mx-2" style={{ color: "#70be51" , cursor: "pointer" }} onClick={increaseQuantity} aria-hidden="true"></i>
                  <h4 className="mx-2" style={{ fontSize: "40px" }}> {quantity} </h4>
                  <i className="fa fa-minus mx-2" style={{ color: "#eb6b40" , cursor: "pointer" }} onClick={decreaseQuantity} aria-hidden="true"></i>
              </div>
              </div>
              <hr className="mt-0"/>
              <button className={`btn buttonClass ${!user && "disabled"}`} onClick={addToCartHandler}> Add To Cart </button>
            </div>
          </div>
        )}
      </div>
  );
};

export default Productdetails;
