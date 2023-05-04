import mongoose,{Types} from "mongoose";
import {IRestaurant,restaurantModel}  from './restaurant_model';

 interface IReview {
  restaurantId: Types.ObjectId;
  reviewText: string;
}

const reviewSchema = new mongoose.Schema<IReview>({
  restaurantId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'restaurants',
    required:true
},
  reviewText: { 
    type: String, 
    required: true 
},
});


const reviewModel:mongoose.Model<IReview>=mongoose.model<IReview>('reviews',reviewSchema);
export  {IReview,reviewModel};