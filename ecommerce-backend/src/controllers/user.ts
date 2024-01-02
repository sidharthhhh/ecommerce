import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";


export const newUser = async (req: Request<{},{}, NewUserRequestBody>, res: Response, next: NextFunction) => {
  try {
    console.log("hello")
    const {name, email, photo, gender,_id, dob} = req.body;

    // console.log(name, email, photo, gender,_id, dob);

    const user = await User.create({
        name, email, photo, gender,_id, dob: new Date(dob),
    })
   return  res.status(200).json({
        sucess: true,
        message: `welcome, ${user.name}`
    })

  } catch (error) {
    return  res.status(404).json({
        sucess: false,
        message: `error`
    })
  }
}