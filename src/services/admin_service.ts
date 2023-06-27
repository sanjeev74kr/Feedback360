import {restaurantModel} from '../models/business_model';
import { messages } from '../utils/messages';

export const getAnalytics= async()=>{
    try {
        const restaurants = await restaurantModel.aggregate([
          {
            $lookup: {
              from: 'reviews',
              localField: '_id',
              foreignField: 'restaurantId',
              as: 'restaurantReviews',
            },
          },
          {
            $group: {
              _id:'$_id',
              restaurantId:{$first:'$_id'},
              name:{$first:'$name'} ,
              reviewCount: { $sum:{$size:'$restaurantReviews'}
            } ,
            },
          },
          {
            $project: {
              _id:0,
              ID: '$restaurantId',
              RestaurantName: '$name',
              TotalReviews:'$reviewCount'
            },
         },
        ]);
        return restaurants;
}
catch(error){
  throw new Error(messages.ERROR_FETCHING_DATA);
}
}