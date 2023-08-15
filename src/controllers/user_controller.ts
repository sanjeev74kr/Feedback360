import { Request, Response } from "express";
import { logIn, signUp } from "../services/user_service";
import sendErrorResponse from "../utils/sendErrorResponse";
import jwt from 'jsonwebtoken';
import { Types } from "mongoose";

const logInController = async (req: Request, resp: Response) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const adminId = req.body.adminId;
        const res = await logIn(email, password, adminId);
        console.log("res:", res);
        if (res != null) {
            const token = generateAuthToken(res._id, res.role);
            resp.cookie('userjwt', token);
            resp.status(200).send("LoggedIn succesfully");
        }
        else {
            resp.status(404).send("Invalid credentials");
        }
    }
    catch (error) {
        sendErrorResponse(resp, error, 505, "Some error occured");
    }
}

const signUpController = async (req: Request, resp: Response): Promise<void> => {
    try {
        const data = req.body;
        const res = await signUp(data);
        console.log("res:", res);
        const token = generateAuthToken(res._id, res.role);
        resp.cookie('userjwt', token);
        resp.status(200).send("Signed up successfully");
    }
    catch (error) {
        sendErrorResponse(resp, error, 505, "Error occured while signing up");
    }
}


//generateAuthTokenfunction
function generateAuthToken(userId: Types.ObjectId, role: string) {
    const SECRET_KEY = process.env.SECRET_KEY;
    if (SECRET_KEY != null) {
        const token = jwt.sign({ userId, role }, SECRET_KEY);
        return token;
    }

}


export { logInController, signUpController };