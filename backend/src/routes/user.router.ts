import express, { Request, Response } from 'express';
import UserController from '../controllers/user.controller';
import { userValidator, handleUserValidationErrors } from '../middlewares/user.validator';
import passport from "passport";
import userController from '../controllers/user.controller';
import { tokenGenerator } from '../utils/utility';
import { jwtAuthBear } from '../utils/utility';

const router = express.Router();


router.get('/users', /* jwtAuthBear, */ async (req: Request, res: Response) => {
    try {
        const users = await UserController.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.get('/users/:uid', /* jwtAuthBear, */ async (req: Request, res: Response) => {
    try {
        const { uid } = req.params;
        const users = await UserController.getUserById(uid);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});


router.post("/users/loginGoogle", async (req: Request, res: Response) => {
    try {
        const user = await UserController.loggGoogle(req.body);
        const token = tokenGenerator(user);
        return res.status(201).json({
            ok: true,
            token,
            msg: "Loggin exitoso"
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Ah ocurrido un error, comunicarce con el administrador',
        })
    }
})

router.post(
    "/users",
    userValidator,
    handleUserValidationErrors,
    passport.authenticate("register", {
        failureMessage: "User already register",
    }),
    async (req: Request, res: Response) => {
        try {
            res.status(200).json({ message: "Usuario creado" });
        } catch (error) {
            return res.status(404).json({
                ok: false,
                msg: 'Ah ocurrido un error, comunicarce con el administrador',
            })
        }
    }
);

router.post(
    '/users/login',
    passport.authenticate("login"),
    async (req: Request, res: Response) => {
        try {
            const { email, ...rest } = req.body;

            const userToken = await userController.findOne(req.body);
            
            const token = tokenGenerator(userToken);

            res.status(200).json(token);
        } catch (error) {
            return res.status(404).json({
                ok: false,
                msg: 'Ah ocurrido un error, comunicarce con el administrador',
            })
        }
    }
)

router.put('/users/:uid', /* jwtAuthBear, */ async (req: Request, res: Response) => {
    
    try {
        const userData = req.body;
        const { uid } = req.params;
        await UserController.updateUser(uid, userData);
        res.status(200).json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});


router.delete('/users/:uid', /* jwtAuthBear, */ async (req: Request, res: Response) => {
    try {
        const { uid } = req.params;
        await UserController.deleteUser(uid);
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;
