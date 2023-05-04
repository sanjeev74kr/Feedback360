
import express from "express";
import './database';
import restaurantRouter from './routes/restaurant_routes';
import adminRouter from './routes/admin_routes'
const app=express();

app.use(express.json());

app.use('/restaurants',restaurantRouter);
app.use('/admin',adminRouter);

const PORT=process.env.PORT;
if (!PORT) {
    console.error("PORT environment variable is not defined");
    process.exit(1);
}
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
}
);
