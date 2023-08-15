import { getAnalytics } from "../services/admin_service";
import { Request, Response } from "express";
import sendErrorResponse from "../utils/sendErrorResponse";
import { messages } from "../utils/messages";

export const getAnalyticsForAdmin = async (req: Request, resp: Response): Promise<void> => {
  try {
    const analytics = await getAnalytics();
    resp.status(200).json(analytics);
  }
  catch (error) {
    sendErrorResponse(resp, error, 500, messages.ERROR_FETCHING_DATA);
  }
}