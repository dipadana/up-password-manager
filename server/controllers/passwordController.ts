import Password, { IPassword } from "../models/password";
import { Request, Response, NextFunction } from "express";

export default class passwordController {
  static async myPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.loggedUser;
      const data: IPassword[] = await Password.find({ UserId: _id }).populate(
        "UserId"
      );
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async findOnePassword(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { _id } = req.params; // password Id
      const data: IPassword | null = await Password.findOne({ _id }).populate(
        "UserId"
      );
      if (data) {
        res.status(200).json(data);
      } else {
        next({ status: 404, message: "Password data not found" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async createPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.loggedUser;
      const { passwordData, nameData, urlData } = req.body;
      const data = await Password.create({
        UserId: _id,
        passwordData,
        nameData,
        urlData,
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async updatePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const UserId = req.loggedUser._id;
      const { _id } = req.params; // password id
      const { passwordData, nameData, urlData } = req.body;
      const data: IPassword | null = await Password.findOneAndUpdate(
        { _id },
        { passwordData, nameData, urlData },
        { new: true }
      );
      if (data) {
        res.status(200).json(data);
      } else {
        next({ status: 404, message: "User not found" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async deletePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.params; // password id
      const data = await Password.deleteOne({ _id });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}
