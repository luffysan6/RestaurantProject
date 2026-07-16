import jwt from "jsonwebtoken";

export const GenerateToken = async (Data) => {
  return jwt.sign(Data, "HelloWorld");
};

export const verfiyToken = async (Token) => {
  return jwt.verify(Token, "HelloWorld");
};
