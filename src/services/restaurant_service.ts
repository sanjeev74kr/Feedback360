import { Types } from 'mongoose';
import { IRestaurant, restaurantModel } from '../models/restaurant_model';
import { IReview, reviewModel } from '../models/review_model';
import { messages } from '../utils/messages';

//Function for getting all restaurants
export const getAllRestaurants = async (): Promise<IRestaurant[]> => {
  try{
  return await restaurantModel.find({}, { name: 1, address: 1 });
  }
  catch(error){
     throw new Error(messages.ERROR_FETCHING_DATA);
  }
};

//Function for getting restaurant by Id and showing restaurant details with reviews
export const getRestaurantById = async (restaurantId: Types.ObjectId): Promise<IRestaurant[] | null> => {
  try{ 
  return await restaurantModel.aggregate([
          {
            $match: { _id:restaurantId},
          },
          {
            $lookup: {
              from: "reviews",
              localField: "_id",
              foreignField: "restaurantId",
              as: "restaurantReviews",
            },
          },
          {
            $project: {
              name: 1,
              address: 1,
              description:1,
              "restaurantReviews.rating":1,
              "restaurantReviews.reviewText": 1,

            },
          },
        ]);
      }
      catch(error){
        throw new Error(messages.ERROR_FETCHING_DATA);
      }
};

//For saving a new restaurant
export const saveRestaurant=async(data:IRestaurant):Promise<IRestaurant>=>
{
  try{
  const newRestaurant= new restaurantModel(data);
  return await newRestaurant.save();
  }
  catch(error){
    throw new Error(messages.ERROR_SAVING_DATA);
  }
}

//for posting review
export const postReview = async (restaurantId: Types.ObjectId,rating:number,reviewText: string): Promise<IReview> => {
  try{
  const newReview = new reviewModel({restaurantId,rating,reviewText});
  return await newReview.save();
  }
  catch(error){
    throw new Error(messages.ERROR_SAVING_DATA);
  }
};
