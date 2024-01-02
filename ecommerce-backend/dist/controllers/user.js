import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        const {} = req.body;
        const user = await User.create({});
        return res.status(200).json({
            sucess: true,
            message: `welcome, ${user.name} `
        });
    }
    catch (error) {
    }
};
