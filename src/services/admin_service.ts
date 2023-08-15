import { businessModel } from '../models/business_model';
import { messages } from '../utils/messages';

export const getAnalytics = async () => {
  try {
    const businesses = await businessModel.aggregate([
      {
        $lookup: {
          from: 'feedbacks',
          localField: '_id',
          foreignField: 'businessId',
          as: 'businessFeedbacks',
        },
      },
      {
        $group: {
          _id: '$_id',
          businessId: { $first: '$_id' },
          name: { $first: '$name' },
          reviewCount: {
            $sum: { $size: '$businessFeedbacks' }
          },
        },
      },
      {
        $project: {
          _id: 0,
          ID: '$restaurantId',
          businessName: '$name',
          TotalReviews: '$reviewCount'
        },
      },
    ]);
    return businesses;
  }
  catch (error) {
    throw new Error(messages.ERROR_FETCHING_DATA);
  }
}