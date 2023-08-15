import express from "express";
import cookieParser from 'cookie-parser';
import './database';
import businessRouter from './routes/business_routes';
import adminRouter from './routes/admin_routes'
import userRouter from './routes/user_routes';
import { messages } from "./utils/messages";


const app = express();
app.use(express.json());
app.use(cookieParser());


app.use('/business', businessRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);

//getting port from .env
const PORT = process.env.PORT;
if (!PORT) {
    console.error(messages.ERROR_PORT_ENV);
    process.exit(1);
}
app.listen(PORT, () => {
    console.log(`${messages.SUCCESS_PORT} ${PORT}`);
}
);

