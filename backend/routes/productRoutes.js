import express from 'express'
const router = express.Router()
import { protect, admin } from '../midddleware/authMiddleware.js'
import {getProducts, getProductById, deleteProduct, createProduct, updateProduct, createProductReview, getTopProducts} from '../controllers/productController.js'


router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.route('/top').get(getTopProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)

export default router;
