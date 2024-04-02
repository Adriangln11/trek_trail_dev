import dotenv from 'dotenv'

dotenv.config()

export const port: string | undefined = process.env.PORT
export const db: string = process.env.DB || ''
export const secretKey: string = process.env.JWT_SECRET || ''

export enum CODE {
	BAD_REQUEST = 400,
	NOT_FOUND = 404,
	CREATED = 201,
	OK = 200,
	INTERNAL_SERVER_ERROR = 500
}
