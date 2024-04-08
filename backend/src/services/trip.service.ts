import { tripsInterface } from "../interfaces/trips.interface";
import tripRepository from "../repositories/trip.repository";

class tripService {
    async getAllTrips(): Promise<any[]>{
        try {
           const trips = await tripRepository.getAllTrips(); 
           if(!trips) throw new Error('Viajes no encontrados');
           return trips;
        } catch (error) {
            throw new Error(`Error al obtener viajes: ${(error as Error).message}`);
        }
    }
    async findOne(data: any): Promise<any>{
        try {
            const trip = await tripRepository.findOne(data);
            if (!trip) throw new Error('Viaje no encontrados');
            return trip;
        } catch (error) {
            throw new Error(`Error al obtener viaje: ${(error as Error).message}`);
        }
    }
    async getTripById(tid: any): Promise<any | null>{
        try {
            const trip = await tripRepository.getTripById(tid);
            if (!trip) throw new Error('Viaje no encontrados');
            return trip;
        } catch (error) {
            throw new Error(`Error al obtener viaje: ${(error as Error).message}`);
        }
    }
    async createTrip(tripData: tripsInterface): Promise<any>{
        try {
            return await tripRepository.createTrip(tripData);
        } catch (error) {
            throw new Error(`Error al obtener viaje: ${(error as Error).message}`);
        }
    }
    async updateTrip(tripId: string, tripData: any): Promise<any> {
        try {
            const trip = await tripRepository.getTripById(tripId);
            if (!trip) throw new Error('Viaje no encontrados');
            return await tripRepository.updateTrip(tripId, tripData);
        } catch (error) {
            throw new Error(`Error al obtener viaje: ${(error as Error).message}`);
        }
    }
    async deleteTrip(tripId: string): Promise<any>{
        try {
            const trip = await tripRepository.getTripById(tripId);
            if (!trip) throw new Error('Viaje no encontrados');
            return  await tripRepository.deleteTrip(trip);
        } catch (error) {
            throw new Error(`Error al obtener viaje: ${(error as Error).message}`);
        }
    }
}

export default new tripService