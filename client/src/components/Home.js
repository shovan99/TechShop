import React , { useEffect } from 'react'
import { useSelector , useDispatch } from "react-redux"

import Pizza from './Pizza'

import { getAllPizzas } from "../actions/pizzaAction"

import Spinner from "react-bootstrap/Spinner"

import Alert from "react-bootstrap/Alert"

import Filter from "./Filter"

import { Link } from "react-router-dom"

import Carousel from "./myCarousel"

import Footer from "./Footer"

import { getProduct } from '../actions/pizzaAction'

import { loadUser } from '../actions/authAction'

const Home = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllPizzas())
        // dispatch(loadUser())
    },[])

    const pizzasstate = useSelector(state => state.getAllPizzaReducer)

    const { pizzas , loading , error } = pizzasstate
    
    return (
        <>
        <Carousel/>
        <div className="container">
        <h2 className="text-center mt-4 headingClass"> Our Products </h2>
        <hr className="mt-0"/>
        <Filter/>
        <div className="row justify-content-center">
            { loading ? <Spinner animation="border" style={{ width: "120px" , height: "120px" }} variant="success"/> : error ? <Alert variant="warning"> Server Error </Alert> : (
                pizzas.map(pizza => (
                    <Pizza key={pizza._id} pizza={pizza}/>
                ))
            ) }
        </div>
        </div>
        <Footer/>
        </>
    )
}

export default Home
