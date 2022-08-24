import React , { useState , useEffect } from 'react'
import { useSelector , useDispatch } from "react-redux"

import { createProduct } from '../actions/adminAction'

import Spinner from "react-bootstrap/Spinner"

import Alert from "react-bootstrap/Alert"


const Productcreate = () => {

    const dispatch = useDispatch()

    const createproductstate = useSelector(state => state.createProductReducer)

    const { error , success , loading } = createproductstate

    const [ name , setName ] = useState("")
    const [ price , setPrice ] = useState(0)
    const [ category , setCategory ] = useState("")
    const [ image , setImage ] = useState("")
    const [ description , setDescription ] = useState("")
    const [ url , setUrl ] = useState("")

    const [ uploadLoading , setUploadLoading ] = useState(false)

    const uploadImage = async(  ) => {
        
        setUploadLoading(true)
        const data = new FormData()
        if( !image ) {
            setUploadLoading(false)
            return
        }
        data.append("file" , image)
        data.append("upload_preset" , "techshop")
        data.append("cloud_name" , "techshopodgi2")
        await fetch("https://api.cloudinary.com/v1_1/techshopodgi2/image/upload" , {
            method: "POST",
            body: data
        }).then(response => response.json()).then(data => {
            if( data.error ) {
                console.log(data.error)
                setUploadLoading(false)
                return
            }
            setUrl(data.url)
            setUploadLoading(false)
        }).catch(err => {
            console.log(err)
            setUploadLoading(false)
        })
    }

    useEffect(() => {
        if( url ) {
            const product = {
                name: name,
                price: price,
                category: category,
                image: url,
                description: description
            }
            dispatch(createProduct(product))
        }
    },[url])


    // const submitHandler = () => {
    //     dispatch(createProduct(product))
    // }
    return (
        <div style={{ marginTop: "100px" }}>
            <h2 className="headingClass text-center"> Create Product </h2>
            { error && <Alert variant="warning"> {error} </Alert> }
            { success && <Alert variant="success"> Product Created </Alert> }
            <hr className="mt-0 mb-0"/>
            <div className="p-4 rounded">
            <div className="mb-2">
                <label className="form-label headingClass"> Name </label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control inputClass"/>
            </div>
            <div className="mb-2">
                <label className="form-label headingClass"> Price </label>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="form-control inputClass"/>
            </div>
            <div className="mb-2">
                <label className="form-label headingClass"> Category </label>
                <select className="form-select inputClass" onChange={e => setCategory(e.target.value)}>
                    <option selected disabled> Select Category </option>
                    <option value="books"> Books </option>
                    <option value="electronics"> Electronics </option>
                    <option value="accessories"> Accessories </option>
                    <option value="goodies"> Goodies </option>
                </select>
            </div>
            <div className="mb-2">
                <lable className="form-label headingClass"> Image </lable>
                <input type="file" onChange={e => setImage(e.target.files[0])} className="form-control inputClass"/>
            </div>
            <div className="mb-2">
                <lable className="form-lable headingClass"> Description </lable>
                <textarea className="form-control inputClass" value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <button className="btn buttonClass w-100 mb-4 mt-2" onClick={uploadImage}> { loading || uploadLoading ? <Spinner style={{ color: "#fceec2" }} animation="border"/> : "Create Product" } </button>
            </div>
        </div>
    )
}

export default Productcreate
