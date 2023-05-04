import { getAnalytics } from "../services/admin_service";
import { Request,Response } from "express";

export const getAnalyticsForAdmin= async(req:Request,resp:Response)=>
{try{
    const analytics= await getAnalytics();
    resp.status(200).json(analytics);
} catch (err) {
  console.error(err);
  resp.status(500).json({ message: 'Internal Server Error' });
}
}