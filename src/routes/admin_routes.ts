import express from 'express';
import {getAnalyticsForAdmin} from '../controllers/admin_controller'
const router=express.Router();

router.get('/analytics',getAnalyticsForAdmin); //route for getting analytics for admin

export default router;