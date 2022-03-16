import User, { IUserModel } from "../models/user";
import { decodeHash } from "../helpers/bcrypt";
import { generateToken } from "../helpers/jwt";
import { Request, Response, NextFunction } from "express";

export default class userController {
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const data: IUserModel | null = await User.findOne({ email });
      if (data) {
        if (decodeHash(password, data.password)) {
          let payload: object = {
            username: data.username,
            email: data.email,
            _id: data._id,
          };
          let access_token = generateToken(payload);
          // console.log(data)
          res
            .status(200)
            .json({ access_token, username: data.username, email: data.email });
        } else {
          next({ status: 400, message: "Invalid email/password" });
        }
      } else {
        next({ status: 400, message: "Email not registered" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      // console.log(req.body.email)
      const { username, email, password } = req.body;
      const data = await User.create({ username, email, password });
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  }
}
