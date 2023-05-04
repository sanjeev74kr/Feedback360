import mongoose,{Types} from "mongoose";

interface IReview {
  restaurantId: Types.ObjectId;
  rating:number;
  reviewText: string;
}

const reviewSchema = new mongoose.Schema<IReview>({
  restaurantId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'restaurants',
    required:true
},
rating: { 
  type: Number, 
  required: true 
},
  reviewText: { 
    type: String, 
    required: true 
},
});


const reviewModel:mongoose.Model<IReview>=mongoose.model<IReview>('reviews',reviewSchema);
export  {IReview,reviewModel};