import express from 'express';
import { getAnalyticsForAdmin } from '../controllers/admin_controller'
import auth from '../middlewares/auth'
const router = express.Router();

router.get('/analytics', auth, getAnalyticsForAdmin); //route for getting analytics for admin

export default router;