
import mongoose, { Types } from 'mongoose';
import { IRestaurant, restaurantModel } from '../models/restaurant_model';
import { IReview, reviewModel } from '../models/review_model';

export const getAllRestaurants = async (): Promise<IRestaurant[]> => {
  return await restaurantModel.find({}, { name: 1, address: 1 });
};

export const getRestaurantById = async (restaurantId: Types.ObjectId): Promise<IRestaurant[] | null> => {
    return await restaurantModel.aggregate([
          {
            $match: { _id:restaurantId},
          },
          {
            $lookup: {
              from: "reviews",
              localField: "_id",
              foreignField: "restaurantId",
              as: "reviews",
            },
          },
          {
            $project: {
              name: 1,
              address: 1,
              description:1,
              "reviews.reviewText": 1,
            },
          },
        ]);
};

export const saveRestaurant=async(data:IRestaurant):Promise<IRestaurant>=>
{
  const newRestaurant= new restaurantModel(data);
  return await newRestaurant.save();
}
export const postReview = async (restaurantId: Types.ObjectId,reviewText: string): Promise<IReview> => {
  const newReview = new reviewModel({restaurantId,reviewText});
  return await newReview.save();
};
