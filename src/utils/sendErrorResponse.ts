import { Response } from 'express';

function sendErrorResponse(resp: Response, error: any, statusCode: number, message: string): void {
  console.log(error);
  resp.status(statusCode).send(message);
}

export default sendErrorResponse;
