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

router.get('/users/:id',  async (req: Request, res: Response) => {
    try {
        const userId: string = req.params.id;
        const users = await UserController.getUserById(userId);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});


router.post("/users/loginGoogle", async (req: Request, res: Response) => {
    try {
        const { credential } = req.body;
        
        const user = await UserController.loggGoogle(credential);
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

            const userToken = await userController.findOne(email);

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

router.put('/users/:id', jwtAuthBear, async (req: Request, res: Response) => {
    const userId: string = req.params.id;
    const userData = req.body;
    try {
        await UserController.updateUser(userId, userData);
        res.status(200).json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});


router.delete('/users/:id', jwtAuthBear, async (req: Request, res: Response) => {
    const userId: string = req.params.id;
    try {
        await UserController.deleteUser(userId);
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;
