import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { getAllRestaurants, getRestaurantById, postReview, saveRestaurant } from '../services/restaurant_service';
import sendErrorResponse from '../utils/sendErrorResponse';
import { messages } from '../utils/messages';

//get all available restaurants
export const getAllRestaurantsController = async ( req: Request, resp: Response ): Promise<void> => {
 try {
    const restaurants = await getAllRestaurants();
    resp.status(200).json(restaurants);
  } catch (error) {
    sendErrorResponse(resp,error,500,messages.ERROR_FETCHING_DATA);
  }
};

//show restaurant by Id with reviews
export const getRestaurantByIdController = async ( req: Request, resp: Response ): Promise<void> => {
  try {
    const restaurantId = req.params._id;  
    const restaurant = await getRestaurantById(new Types.ObjectId(restaurantId));
    resp.status(200).json(restaurant);
  } 
  catch (error) {
    sendErrorResponse(resp,error,500,messages.ERROR_FETCHING_DATA);
  }
};

//Save new restaurant
export const saveRestaurantController= async ( req: Request, resp: Response ): Promise<void> =>{
  try{
    const restaurant =await saveRestaurant(req.body);
    resp.status(200).json({message: messages.SUCCESS_RESTAURANT_SAVED});
  }
  catch(error){
    sendErrorResponse(resp,error,500,messages.ERROR_SAVING_DATA);
  }
}

//Post new review
export const postReviewController = async ( req: Request, resp: Response ): Promise<void> => {
  try {
    const restaurantId = req.params._id;
    const rating=req.body.rating;
    const reviewText = req.body.reviewText;
    await postReview(new Types.ObjectId(restaurantId), rating,reviewText);
    resp.status(200).json({ message: messages.SUCCESS_REVIEW_SUBMIT });
  } 
  catch (error) {
    sendErrorResponse(resp,error,500,messages.ERROR_SAVING_DATA);
  }
};
