import CommentDto from "../dto/comments.dto";
import { commentsInterface } from "../interfaces/coments.interface";
import CommentsRepository from "../repositories/comments.repository";

class CommentService {
    async getAllComment():Promise<CommentDto[]> {
        try {
            return await CommentsRepository.getAllComments()
        } catch (error) {
            throw new Error(`Error al obtener comentarios ${(error as Error).message}`)
        }
    }
    async createComment(commentData: commentsInterface):Promise<CommentDto>{
        try {
            return await CommentsRepository.createComment(commentData)
        } catch (error) {
            throw new Error(`Error al crear comentario ${(error as Error).message}`)
        }
    }
}
export default new CommentService();