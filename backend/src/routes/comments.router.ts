import express, { Request, Response } from "express";
import CommentsController from "../controllers/comments.controller";
import { commentsValidator } from "../middlewares/comments.validator";
import { commentsInterface } from "../interfaces/coments.interface";

const router = express.Router();

router.get("/comments", async (req: Request, res: Response) => {
  try {
    const comments = await CommentsController.getAllComment();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

router.post(
  "/comments",
  commentsValidator,
  async (req: Request, res: Response) => {
    const commentData: commentsInterface = req.body;
    try {
      const createComment = await CommentsController.createComment(commentData);
      return res.status(200).json(createComment);
    } catch (error) {
      return res.status(400).json(`Error al crear comentario: ${(error as Error).message}`)
    }
  }
);
export default router;
