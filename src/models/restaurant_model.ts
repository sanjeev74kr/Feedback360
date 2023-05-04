import mongoose from 'mongoose';

interface IRestaurant{
    name:string,
    address:string,
    description:string,
   }

const restaurantSchema= new mongoose.Schema<IRestaurant>(
{ 
  name: { 
    type: String, 
    required: true 
},
  address: { type: String, 
    required: true 
},
  description: { type: String, 
    required: true },
});

const restaurantModel:mongoose.Model<IRestaurant>=mongoose.model('restaurants',restaurantSchema);
export {IRestaurant, restaurantModel};