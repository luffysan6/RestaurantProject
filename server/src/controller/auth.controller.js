import bcrypt from "bcryptjs";
import User from "../model/user.model.js";

export const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    // console.log({ email, password });
    if (!email) {
      return res.json({
        success: false,
        message: "email is required",
      });
    }
    if (!password) {
      return res.json({
        success: false,
        message: "password is required",
      });
    }

    // check for email if it exist

    const userData = await User.findOne({ email: email });

    if (!userData) {
      return res.json({
        success: false,
        message: "User with This Email Doesn't Exist ",
      });
    }

    // check for password

    const checkPassword = await bcrypt.compare(password, userData.password);

    if (!checkPassword) {
      return res.json({
        success: false,
        message: "Wrong Password",
      });
    }

    console.log(userData);

    return res.json({
      data: req.body,
    });
  } catch (error) {
    console.log({
      error: "you got Error ",
      errorinfo: error,
    });

    return res.json({
      success: false,
      message: "Error on Server",
    });
  }
};
