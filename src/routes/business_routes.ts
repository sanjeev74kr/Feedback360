import express from 'express';
import { getAllBusinessController, getBusinessByCategoryController, getBusinessByIdController, postFeedbackController, saveBusinessController } from '../controllers/business_controller'

const router = express.Router();


router.get('/category', getBusinessByCategoryController);
router.get('', getAllBusinessController); //routes for getting all available businesses
router.get('/:_id', getBusinessByIdController); //routes for getting a particular business by Id
router.post('/:_id/feedback', postFeedbackController); //routes for posting review
router.post('/save', saveBusinessController); //routes for saving a new business

export default router;