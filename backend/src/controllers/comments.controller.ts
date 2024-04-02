import CommentDto from "../dto/comments.dto";
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
}
export default new CommentController();
