import jwt from "jsonwebtoken";

export const GenerateToken = async (Data) => {
  return jwt.sign(Data, process.env.JWT_TOKEN);
};

export const verfiyToken = async (Token) => {
  return jwt.verify(Token, process.env.JWT_TOKEN);
};
