import CommentDto from "../dto/comments.dto";
import { commentsInterface } from "../interfaces/coments.interface";
import commentsService from "../services/comments.service";

class CommentController {
  async getAllComment(): Promise<CommentDto[]> {
    try {
      return await commentsService.getAllComment();
    } catch (error) {
      throw new Error(
        `Error al obtener comentario ${(error as Error).message}`
      );
    }
  }
  async createComment(commentData: commentsInterface): Promise<any>{
    try {
      return await commentsService.createComment(commentData)
    } catch (error) {
      throw new Error(`Error al crear comentario: ${(error as Error).message}`)
      
    }
  }
}
export default new CommentController();
