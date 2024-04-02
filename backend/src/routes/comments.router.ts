import express, { Request, Response } from 'express'
import CommentsController from '../controllers/comments.controller';

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    try {
        const comments = await CommentsController.getAllComment();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }    
})
export default router;