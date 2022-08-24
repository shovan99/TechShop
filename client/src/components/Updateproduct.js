import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getProduct, updateProduct } from "../actions/adminAction";

import Spinner from "react-bootstrap/Spinner";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css"

import axios from "axios";

const Updateproduct = ({ match }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const [price, setPrice] = useState(0);

  const [category, setCategory] = useState("");

  const [image, setImage] = useState("");

  const [description, setDescription] = useState("");

  const [prodLoading, setProdLoading] = useState(false);

  const [id, setId] = useState("");

  const getproductstate = useSelector((state) => state.getProductReducer);

  const updateproductstate = useSelector((state) => state.updateProductReducer);

  const { product } = getproductstate;

  const { loading, success , error } = updateproductstate;

  useEffect(() => {
    const loadProduct = async () => {
      setProdLoading(true);
      await axios.get(`/api/product/${match.params.id}`).then((data, err) => {
        if (err) {
          setProdLoading(false);
          console.log("error" + err);
        } else {
          console.log(data.data.product);

          const product = data.data.product;
          setName(product.name);
          setPrice(product.price);
          setCategory(product.category);
          setImage(product.image);
          setDescription(product.description);
          setId(product._id);
          setProdLoading(false);
        }
      });
    };
    loadProduct();
  }, []);

  const updateHandler = () => {
    const newProduct = {
      name: name,
      price: price,
      category: category,
      image: image,
      description: description,
    };
    dispatch(updateProduct(id, newProduct));
  };


  const successMessage = ( message ) => {
      toast.success(message , { autoClose: 4000 })
  }

  const errorMessage = ( message ) => {
      toast.warn(message , { autoClose: 4000 })
  }

  return (
      <div style={{ marginTop: "100px" }}>
      <ToastContainer/>
      <h2 className="headingClass text-center"> Update Product </h2>
      <hr className="mt-0 mb-0" />

      {success && successMessage(success)}

      {error && errorMessage(error)}
      
      {!prodLoading ? (
        <div className="p-4 rounded">
          <div className="mb-2">
            <label className="form-label headingClass">
              Name {product.name}
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control inputClass"
            />
          </div>
          <div className="mb-2">
            <label className="form-label headingClass"> Price </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control inputClass"
            />
          </div>
          <div className="mb-2">
            <label className="form-label headingClass"> Category </label>
            <select
              className="form-select inputClass"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option selected disabled>
                Select Category
              </option>
              <option value="books"> Books </option>
              <option value="electronics"> Electronics </option>
              <option value="accessories"> Accessories </option>
              <option value="goodies"> Goodies </option>
            </select>
          </div>
          <div className="mb-2">
            <lable className="form-label headingClass"> Image </lable>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="form-control inputClass"
              //   value={product.image}
            />
          </div>
          <div className="mb-2">
            <lable className="form-lable headingClass"> Description </lable>
            <textarea
              className="form-control inputClass"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            className="btn buttonClass w-100 mb-4"
            onClick={updateHandler}
          >
            {loading ? (
              <Spinner animation="border" style={{ color: "#fceec2" }} />
            ) : (
              "Update Product"
            )}
          </button>
        </div>
      ) : (
        <>
          <Spinner variant="success" animation="border" />
        </>
      )}
    </div>
  );
};

export default Updateproduct;
