import dotenv from "dotenv";

dotenv.config();

export const port: string | undefined = process.env.PORT;
export const db: string = process.env.DB || '';
export const secretKey: string = process.env.JWT_SECRET || '';
export const secret: string = process.env.SECRET || '';
export const secretGoogle: string = process.env.secretGoogle || '';