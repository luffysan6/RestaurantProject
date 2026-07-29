import bcrypt from "bcryptjs";
import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
import { hashPassword } from "../libs/Hashing.js";
import { GenerateToken, verfiyToken } from "../libs/token.js";
export const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    // console.log({ email, password });
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "email is required",
      });
    }
    if (!password) {
      return res.status(400).json({
        success: false,
        message: "password is required",
      });
    }

    // check for email if it exist

    const userData = await User.findOne({ email: email });

    if (!userData) {
      return res.status(404).json({
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

    const token = await GenerateToken({
      id: userData._id,
      role: userData.role,
    });

    console.log(token);

    // console.log(userData);

    // tokens impletement

    // cookies

    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 3600 * 1000 * 24 * 180 * 1), //second min hour days year
      secure: false, // set to true - samesite none only works with https
      httpOnly: true, // backend only
      sameSite: "lax",
    });

    return res.json({
      success: true,
      data: userData,
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

export const RegisterController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (name == "" || name.length == 0) {
      return res.json({
        success: "false",
        message: "User is Required to have a name !",
      });
    }
    if (email == "" || email.length == 0) {
      return res.json({
        success: "false",
        message: "User is Required to have a Email !",
      });
    }

    if (!email.includes("@")) {
      return res.json({
        success: "false",
        message: "Kindly Provide a Valid Email !",
      });
    }

    if (password == "" || password.length == 0) {
      return res.json({
        success: "false",
        message: "User is Required to have a Password !",
      });
    }

    const hashPass = await hashPassword(password);

    const result = await User.insertOne({
      name: name,
      email: email,
      password: hashPass,
    });

    const token = await GenerateToken({
      id: result._id,
      role: result.role,
    });

    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 3600 * 1000 * 24 * 180 * 1), //second min hour days year
      secure: false, // set to true - samesite none only works with https
      httpOnly: true, // backend only
      sameSite: "lax",
    });

    res.json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    console.log({
      error: "you Error ",
      errorinfo: error,
    });

    res.json({
      success: false,
      message: "Error on Server",
    });
  }
};

export const checkAuth = async (req, res) => {
  try {
    const token = req.cookies;

    console.log(token);
    console.log(typeof token);
    if (Object.keys(token).length === 0) {
      return res.json({
        success: false,
        message: "Token Not Found",
      });
    }

    console.log(token);

    console.log(await verfiyToken(token.jwt));

   let decodedToken = await verfiyToken(token.jwt);

    return res.json({
      success: true,
      token: decodedToken,
    });
  } catch (error) {
    console.log({
      error: "you Error ",
      errorinfo: error,
    });

    res.json({
      success: false,
      message: "Error on Server",
    });
  }
};
