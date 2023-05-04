import {IRestaurant,restaurantModel} from '../models/restaurant_model';
import {IReview,reviewModel} from '../models/review_model';

export const getAnalytics= async()=>{
    try {
        const restaurants = await restaurantModel.aggregate([
          {
            $lookup: {
              from: 'reviews',
              localField: '_id',
              foreignField: 'restaurantId',
              as: 'reviews',
            },
          },
          {
            $group: {
              _id: '$_id',
              restaurantId:{ $first: '$_id' },
              name: { $first: '$name' },
              reviewCount: { $sum: 1 },
            },
          },
          {
            $project: {
              ID: '$restaurantId',
            RestaurantName: '$name',
            TotalReviews: '$reviewCount',
            },
          },
        ]);
        return restaurants;

}
catch(error){
    console.log(error);
}
}