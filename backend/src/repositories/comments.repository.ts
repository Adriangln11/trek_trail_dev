import { log } from "console";
import CommentDto from "../dto/comments.dto";
import { commentsInterface } from "../interfaces/coments.interface";
import Comment from "../models/comment.model";
import User from "../models/user.model";

class CommentsRepository {
  async getAllComments(): Promise<CommentDto[] | []> {
    try {
      const comments = await Comment.find();
      const commentsDto = comments.map(
        (comment) => new CommentDto(comment.toObject())
      );
      return commentsDto;
    } catch (error) {
      throw new Error(
        `Error al obtener comentarios: ${(error as Error).message}`
      );
    }
  }
  async getCommentById(commentId: string): Promise<CommentDto | null> {
    try {
      const comment = await Comment.findById(commentId).exec()
      
      if (!comment) {
        return null;
      }

      return comment
    } catch (error) {
      throw new Error(
        `Error al obtener el comentario: ${(error as Error).message}`
      );
    }
  }

  async createComment(commentData: commentsInterface): Promise<any> {
    try {
      const date = new Date();
      const user = await User.findById(commentData.userId)

      if(!user){
        throw new Error(`No existe el usuario con la id: ${commentData.userId}`)
      }
      const newComment = new Comment({ ...commentData, date });
      
      
      const savedComment = await newComment.save();

      await user.comments?.push(savedComment._id)
      
      await user.save()
    
      return savedComment;
    } catch (error) {
      throw new Error(`Error al crear comentario: ${(error as Error).message}`);
    }
  }

  async deleteComment(commentId: string): Promise<any>{
    try {
      const comment = await Comment.findByIdAndDelete(commentId)
      if(!comment){
        throw new Error(`No existe el comentario buscado`)
      }
        return 'Comentario eliminado con éxito!'
      
      
    } catch (error) {
      
      throw new Error(`Error al eliminar comentario: ${(error as Error).message}`)
    }
  }

}
export default new CommentsRepository();
