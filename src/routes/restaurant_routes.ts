import express from 'express';
import { getAllRestaurantsController, getRestaurantByIdController,postReviewController,saveRestaurantController} from '../controllers/restaurant_controller'
const router=express.Router();

router.get('',getAllRestaurantsController); //routes for getting all available restaurants
router.get('/:_id',getRestaurantByIdController); //routes for getting a particular restaurant by Id
router.post('/:_id/review',postReviewController); //routes for posting review
router.post('/post',saveRestaurantController); //routes for saving a new restaurant

export default router;