import React , { useState } from "react";


import { useSelector , useDispatch } from "react-redux"

import { filterPizzas } from "../actions/pizzaAction"

const Filter = () => {
    const [ searchKey , setSearchKey ] = useState("")

    const [ category , setCategory ] = useState("")

    const dispatch = useDispatch()

  return (
    <div>
      <div className="row">
        <div className="col-lg-4 col-sm-12 mb-2">
          <div className="input-group input-group-lg">
            <input
              type="text"
              onChange={e => setSearchKey(e.target.value)}
              placeholder="Search Products"
              className="form-control inputClass"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <select className="form-select form-select-lg mb-2 inputClass" value={category} onChange={ e => setCategory(e.target.value) }>
            {/* <option selected value="All" disabled> Select Category </option> */}
            <option value="all" selected> All </option>
            <option value="books"> Books </option>
            <option value="electronics"> Electronics </option>
            <option value="accessories"> Accessories </option>
            <option value="goodies"> Goodies </option>
          </select>
        </div>
        <div className="col-lg-4 col-sm-12">
          <a className="btn buttonClass btn-lg w-100" onClick={() => {dispatch(filterPizzas(searchKey , category))}}> Filter </a>
        </div>
      </div>
    </div>
  );
};

export default Filter;
