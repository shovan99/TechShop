const express = require("express")
const router = express.Router()

const { getAllPizzas , createPizza , getAllProducts , removeProduct , getProductById , updateProduct } = require("../controllers/pizza")

router.get("/pizzas/all" , getAllPizzas)

router.post("/pizzas/create" , createPizza)

router.get("/products/all" , getAllProducts)

router.delete("/product/remove/:id" , removeProduct)

router.get("/product/:id" , getProductById)

router.put("/product/:id" , updateProduct)

module.exports = router