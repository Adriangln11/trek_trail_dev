import express, { Request, Response, NextFunction } from 'express';
import { jwtAuthBear } from '../utils/utility';
import { adminPolicy } from '../middlewares/adminPolicy';
import tripController from '../controllers/trip.controller';

const router = express.Router();

router.get('/trip', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const trips = await tripController.getAllTrips();
        res.status(200).json(trips);
    } catch (error) {
        next(error);
    }
});

router.get('/trip/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const trip = await tripController.getTripById(id);
        res.status(200).json(trip);
    } catch (error) {
        next(error);
    }
});

router.post('/trip', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const newTrip = await tripController.createTrip(data);
        res.status(200).json({
            ok: true,
            msg: 'Viaje creado'
        });
    } catch (error) {
        next(error);
    }
});

router.put('/trip/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedTrip = await tripController.updateTrip(id, data);
        res.status(200).json({
            ok: true,
            updatedTrip
        });
    } catch (error) {
        next(error);
    }
});

router.delete('/trip/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const deletedTrip = await tripController.deleteTrip(id);
        res.status(200).json({
            ok: true,
            deletedTrip
        });
    } catch (error) {
        next(error);
    }
});

export default router;