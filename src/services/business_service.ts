import { Types } from 'mongoose';
import { IBusiness, businessModel } from '../models/business_model';
import { IFeedback, feedbackModel } from '../models/feedback_model';
import { messages } from '../utils/messages';

//Function for getting all businesses by category
export const getBusinessByCategory = async (categoryIs: string): Promise<IBusiness[]> => {
  try {
    console.log("entered in service class");
    return await businessModel.find({ category: categoryIs });
  }
  catch (error) {
    console.log("error is: ", error);
    throw new Error(messages.ERROR_FETCHING_DATA);
  }

}


//Function for getting all businesses
export const getAllBusinesses = async (): Promise<IBusiness[]> => {
  try {
    return await businessModel.find();
  }
  catch (error) {
    throw new Error(messages.ERROR_FETCHING_DATA);
  }
};


//Function for getting business by Id and showing business details with reviews
export const getBusinessById = async (restaurantId: Types.ObjectId): Promise<IBusiness[] | null> => {
  try {
    return await businessModel.aggregate([
      {
        $match: { _id: 'businessId' },
      },
      {
        $lookup: {
          from: "feedbacks",
          localField: "_id",
          foreignField: "businessId",
          as: "businessFeedbacks",
        },
      },
      {
        $project: {
          name: 1,
          location: 1,
          description: 1,
          "businessFeedbacks.ratings": 1,
          "businessFeedbacks.reviews": 1,

        },
      },
    ]);
  }
  catch (error) {
    throw new Error(messages.ERROR_FETCHING_DATA);
  }
};

//For saving a new business
export const saveBusiness = async (data: IBusiness): Promise<IBusiness> => {
  try {
    const newBusiness = new businessModel(data);
    return await newBusiness.save();
  }
  catch (error) {
    throw new Error(messages.ERROR_SAVING_DATA);
  }
}

//for posting feedback
export const postFeedback = async (businessId: Types.ObjectId, ratings: number, reviews: string): Promise<IFeedback> => {
  try {
    const newFeedback = new feedbackModel({ businessId, ratings, reviews });
    return await newFeedback.save();
  }
  catch (error) {
    throw new Error(messages.ERROR_SAVING_DATA);
  }
};
