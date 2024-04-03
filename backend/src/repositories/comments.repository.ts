import CommentDto from "../dto/comments.dto";
import { commentsInterface } from "../interfaces/coments.interface";
import Comment from "../models/comment.model";

class CommentsRepository {
    async getAllComments(): Promise<CommentDto[] | []> {
        try {
            const comments = await Comment.find()
            const commentsDto = comments.map(comment => new CommentDto(comment.toObject()))
            return commentsDto
        } catch (error) {
            throw new Error(`Error al obtener comentarios ${(error as Error).message}`)
        }
    }

    async createComment(commentData: commentsInterface): Promise<any>{
        try {
            const date = new Date()
            const newComment = new Comment({...commentData, date})
            const savedComment = await newComment.save()
            return savedComment;
        } catch (error) {
            throw new Error(`Error al crear comentario: ${(error as Error).message}`);
        }
    }
}
export default new CommentsRepository()