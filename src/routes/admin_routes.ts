import express from 'express';
import {getAnalyticsForAdmin} from '../controllers/admin_controller'
const router=express.Router();

router.get('/analytics',getAnalyticsForAdmin);

export default router;