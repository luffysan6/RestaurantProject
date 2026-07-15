import bcrypt from "bcryptjs";
import User from "../model/user.model.js";
import { hashPassword } from "../libs/Hashing.js";
import { ObjectId } from "mongoose";
export const saveUser = async (req, res) => {
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

    res.json(result);
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

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    const result = await User.findOne({
      _id: id,
    });

    console.log(result);
    console.log(typeof password);
    const IsRight = await bcrypt.compare(password, result.password);

    console.log(IsRight);
    if (!IsRight) {
      return res.json({
        message: "Wrong password",
      });
    }

    res.json({
      id,
      result,
    });
    } catch (error) {
      console.log({
        error: "you Error ",
        errorinfo: error,
      });

      return res.json({
        success: false,
        message: "Error on Server",
      });
    }
};
