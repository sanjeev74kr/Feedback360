import express from "express";
import './database';
import restaurantRouter from './routes/restaurant_routes';
import adminRouter from './routes/admin_routes'
import { messages } from "./utils/messages";

const app=express();
app.use(express.json());

app.use('/restaurants',restaurantRouter);
app.use('/admin',adminRouter);

//getting port from .env
const PORT=process.env.PORT;
if (!PORT) {
    console.error(messages.ERROR_PORT_ENV);
    process.exit(1);
}
app.listen(PORT,()=>{
    console.log(`${messages.SUCCESS_PORT} ${PORT}`);
}
);
