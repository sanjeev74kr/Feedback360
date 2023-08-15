import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { getAllBusinesses, getBusinessByCategory, getBusinessById, postFeedback, saveBusiness } from '../services/business_service';
import sendErrorResponse from '../utils/sendErrorResponse';
import { messages } from '../utils/messages';
import { IBusiness } from '../models/business_model';


//get businesses by category
export const getBusinessByCategoryController = async (req: Request, resp: Response): Promise<void> => {
  try {
    const category: string = req.body.category;
    console.log("category written in body: ", category);
    const businesses: IBusiness[] = await getBusinessByCategory(category);
    if (businesses.length == 0) {
      resp.status(404).json(`No business is listed in  ${category} category`);
    }
    else {
      console.log("returned from service class");
      resp.status(200).json(businesses);
    }
  }
  catch (error) {
    sendErrorResponse(resp, error, 500, messages.ERROR_FETCHING_DATA);
  }
}

//get all available businesses
export const getAllBusinessController = async (req: Request, resp: Response): Promise<void> => {
  try {
    const businesses = await getAllBusinesses();
    resp.status(200).json(businesses);
  } catch (error) {
    sendErrorResponse(resp, error, 500, messages.ERROR_FETCHING_DATA);
  }
};

//show business by Id with feedbacks
export const getBusinessByIdController = async (req: Request, resp: Response): Promise<void> => {
  try {
    const businessId = req.params._id;
    const business = await getBusinessById(new Types.ObjectId(businessId));
    resp.status(200).json(business);
  }
  catch (error) {
    sendErrorResponse(resp, error, 500, messages.ERROR_FETCHING_DATA);
  }
};

//Save new business
export const saveBusinessController = async (req: Request, resp: Response): Promise<void> => {
  try {
    const business = await saveBusiness(req.body);
    resp.status(200).json({ message: messages.SUCCESS_BUSINESS_SAVED });
  }
  catch (error) {
    sendErrorResponse(resp, error, 500, messages.ERROR_SAVING_DATA);
  }
}

//Post new feedback
export const postFeedbackController = async (req: Request, resp: Response): Promise<void> => {
  try {
    const businessId = req.params._id;
    const ratings = req.body.rating;
    const reviews = req.body.reviewText;
    await postFeedback(new Types.ObjectId(businessId), ratings, reviews);
    resp.status(200).json({ message: messages.SUCCESS_REVIEW_SUBMIT });
  }
  catch (error) {
    sendErrorResponse(resp, error, 500, messages.ERROR_SAVING_DATA);
  }
};
