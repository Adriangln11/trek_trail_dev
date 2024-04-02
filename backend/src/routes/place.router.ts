import express, { Request, Response, Router } from 'express'
import { handlePlaceValidationErrors } from '../middlewares/place.validator'
import PlaceController from '../controllers/place.controller'
import { CODE } from '../utils/constants'

const router: Router = express.Router()

router.get('/', async (req: Request, res: Response) => {
	try {
		const places = await PlaceController.getAllPlaces()
		res.status(CODE.OK).json(places)
	} catch (error) {
		res
			.status(CODE.INTERNAL_SERVER_ERROR)
			.json({ message: (error as Error).message })
	}
})

router.get('/:id', async (req: Request, res: Response) => {
	try {
		const placeId: string = req.params.id
		const place = await PlaceController.getUserById(placeId)
		res.status(CODE.OK).json(place)
	} catch (error) {
		res
			.status(CODE.INTERNAL_SERVER_ERROR)
			.json({ message: (error as Error).message })
	}
})

router.post(
	'/',
	handlePlaceValidationErrors,
	async (req: Request, res: Response) => {
		const placeData = req.body
		try {
			const placeCreated = await PlaceController.createPlace(placeData)
			res.status(CODE.OK).json(placeCreated)
		} catch (error) {
			res
				.status(CODE.INTERNAL_SERVER_ERROR)
				.json({ message: (error as Error).message })
		}
	}
)

router.put(
	'/:id',
	handlePlaceValidationErrors,
	async (req: Request, res: Response) => {
		const placeId = req.params.id
		const placeData = req.body
		try {
			const updatedPlace = await PlaceController.updatePlace(placeId, placeData)
			res.status(CODE.OK).json({ message: 'Place Actualizado Correctamente' })
		} catch (error) {
			res
				.status(CODE.INTERNAL_SERVER_ERROR)
				.json({ message: (error as Error).message })
		}
	}
)

router.delete('/:id', async (req: Request, res: Response) => {
	const placeId = req.params.id
	try {
		await PlaceController.deletePlace(placeId)
		res.status(CODE.OK).json({ message: 'Place Eliminado Correctamente' })
	} catch (error) {
		res
			.status(CODE.INTERNAL_SERVER_ERROR)
			.json({ message: (error as Error).message })
	}
})

export default router
