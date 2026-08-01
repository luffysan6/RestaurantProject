import { configDotenv } from "dotenv";

configDotenv();
const env = {
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME || "",
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || "",
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || "",
};

export default env;
