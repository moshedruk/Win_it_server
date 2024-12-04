import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export const onlyManager = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;

        const userData = await jwt.verify(token, process.env.SECRET_KEY as string)

        if (req.body.username != "nettanel" && req.body.password != "0909") {

            res.status(403).send("you dont have an access")

        }
        next();
    } catch (err) {

        res.status(401).json(err);
    }
};
