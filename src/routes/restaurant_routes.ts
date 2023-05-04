import express from 'express';
import { getAllRestaurantsController, getRestaurantByIdController,postReviewController,saveRestaurantController} from '../controllers/restaurant_controller'
const router=express.Router();

router.get('',getAllRestaurantsController);
router.get('/:_id',getRestaurantByIdController);
router.post('/:_id/review',postReviewController);
router.post('/post',saveRestaurantController);

export default router;