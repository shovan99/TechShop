const Pizza = require("../models/pizzaModel")


exports.getAllPizzas = async( req , res ) => {
    const pizzas = await Pizza.find({})
    if( !pizzas ) {
        return res.status(400).json({
            error: "No Pizza's Found Here"
        })
    }
    res.status(200).json({
        pizzas
    })
}

exports.createPizza = async( req , res ) => {
    const { name , price , category , image , description } = req.body
    if( !name || !price || !category || !image || !description ) {
        return res.status(400).json({
            error: "All Fields Are Required"
        })
    }

    const pizza = new Pizza({
        name: name,
        price: price,
        category: category,
        image: image,
        description: description
    })

    pizza.save().then(() => {
        return res.status(200).json({
            message: "Pizza Created"
        })
    }).catch((error) => {
        return res.status(400).json({
            error: "Pizza Is Not Created"
        })
    })
}


exports.getAllProducts = async( req , res ) => {
    const products = await Pizza.find()
    res.status(200).json({
        products
    })
}


exports.removeProduct = async( req , res ) => {
    const removedProduct = await Pizza.findByIdAndRemove(req.params.id)
    console.log(removedProduct)
    if( !removedProduct ) {
        res.status(400).json({
            error: "Product Is Not Removed"
        })
    }

    res.status(200).json({
        
        success: "Product Removed"
    })
}


exports.getProductById = async( req , res ) => {
    const product = await Pizza.findById(req.params.id)
    console.log(product)
    if( !product ) {
        return res.status(400).json({
            error: "Product Is Not Found"
        })
    }
    res.status(200).json({
        product
    })
}


exports.updateProduct = async( req , res ) => {
    await Pizza.findByIdAndUpdate({ _id: req.params.id } , { $set: req.body } , {
        new: true,
        useFindAndModify: false
    } , ( err , updatedProduct ) => {
        if( err ) {
            return res.status(400).json({
                error: "Product Is Not Updated"
            })
        }
        res.status(200).json({
            message: "Product Updated"
        })
    })
}