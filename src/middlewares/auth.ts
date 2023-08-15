import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';

interface DecodedToken extends JwtPayload {
  role: string;
}

const auth = async (req: Request, resp: Response, next: NextFunction) => {
  try {
    const token = req.cookies.userjwt;
    const SECRET_KEY = process.env.SECRET_KEY;
    if (SECRET_KEY != null) {
      const decodedToken = jwt.verify(token, SECRET_KEY) as DecodedToken;
      console.log("verification result:", decodedToken);
      const role = decodedToken.role;
      if (role === 'admin')
        next();

      else
        resp.json("Not authoried to visit");
    }
  }
  catch (error) {
    console.log(error);
    throw new Error();
  }

}

export default auth;