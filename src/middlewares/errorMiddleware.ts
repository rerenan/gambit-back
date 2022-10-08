import { Request, Response, NextFunction } from 'express';

export default async function errorMiddleware(
    error: any, 
    req: Request, 
    res: Response, 
    next: NextFunction
){
    if(error.type === "unauthorized") return res.status(401).send(error.message);
    if(error.type === "notFound") return res.status(404).send(error.message);
    if(error.type === "conflict") return res.status(409).send(error.message);
    if(error.type === "unprocessableEntity") return res.status(422).send(error.message);

    console.log(error);
    res.sendStatus(500);
};