
import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { getAllRestaurants, getRestaurantById, postReview, saveRestaurant } from '../services/restaurant_service';

export const getAllRestaurantsController = async ( req: Request, res: Response ): Promise<void> => {
 try {
    const restaurants = await getAllRestaurants();
    res.status(200).json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getRestaurantByIdController = async ( req: Request, res: Response ): Promise<void> => {
  try {
    const restaurantId = req.params._id;  
    const restaurant = await getRestaurantById(new Types.ObjectId(restaurantId));
    res.status(200).json(restaurant);
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const saveRestaurantController= async ( req: Request, res: Response ): Promise<void> =>{
  try{
    const restaurant =await saveRestaurant(req.body);
    res.status(200).json({message: 'data saved successfully'});
  }
  catch(err){
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const postReviewController = async ( req: Request, res: Response ): Promise<void> => {
  try {
    const restaurantId = req.params._id;
    const reviewText = req.body.reviewText;
    await postReview(new Types.ObjectId(restaurantId), reviewText);
    res.status(200).json({ message: 'Review submitted successfully' });
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
