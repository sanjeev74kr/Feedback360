import express from 'express';
import { logInController, signUpController } from '../controllers/user_controller';
const router = express.Router();

router.post('/signUp', signUpController);
router.post('/logIn', logInController);

export default router;