import React , { useState } from 'react'
import { useSelector , useDispatch } from "react-redux"

import { loadUser } from '../actions/authAction'

import axios from "axios"

const Updateprofile = () => {

    const [ name , setName ] = useState("")

    const [ image , setImage ] = useState("")

    const [ url , setUrl ] = useState("")

    const dispatch = useDispatch()

    const loginuserstate = useSelector(state => state.loginUserReducer)

    const { user } = loginuserstate

    const updateProfileHandler = async(  ) => {
        const newData = {
            name: name,
            // profilePic: url
        }
        const response = await axios.put(`/api/profile/update/${user._id}` , newData)
        console.log(response)

        dispatch(loadUser())
    }
    return (
        <div style={{ marginTop: "100px" }} className="row justify-content-center">
            <h2 className="headingClass text-center"> Update Profile </h2>
            <hr/>
            <div className="col-lg-6 justify-content-center">
                <div className="mb-2">
                    <label className="form-label"> Name </label>
                    <input type="text" className="inputClass form-control"/>
                </div>
                <div className="mb-2">
                    <label className="form-label"> Profile Picture </label>
                    <input type="file" className="inputClass form-control"/>
                </div>
                <button className="btn buttonClass w-100 mb-4 mt-2" onClick={updateProfileHandler}> Update Profile </button>
            </div>
        </div>
    )
}


export default Updateprofile