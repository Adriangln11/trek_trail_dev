import CommentDto from "../dto/comments.dto";
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
}
export default new CommentsRepository()