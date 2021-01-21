import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// @desc    Fetch all products
// @route    GET /api/products
// @access    Public
router.get('/', asyncHandler(async (req,res) => {
    const products = await Product.find({})

    if(products) {
        res.json(products)
    } else {
        console.log('problem')
        res.status(404).json({ message: 'Product not found'})
    }
}))


// @desc    Fetch single product
// @route    GET /api/products/:id
// @access    Public
router.get('/:id', asyncHandler(async (req,res) => {

    const product = await Product.findById(req.params.id)
    console.log(product);
    if(product) {
        console.log('kamlehs')
        res.json(product)
    } else {
        console.log('problem')
        res.status(404).json({ message: 'Product not found'})
    }

}))



export default router;
