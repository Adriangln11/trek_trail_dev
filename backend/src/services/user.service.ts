import UserRepository from '../repositories/user.repository';
import UserDTO from '../dto/user.dto';
import { UserInterface } from '../interfaces/user.interface';
import { createHash } from '../utils/utility';
import { IPayload } from '../interfaces/jwtPayload';
import { jwtDecode } from 'jwt-decode';
import { secretGoogle } from '../utils/constants';

class UserService {
  async getAllUsers(): Promise<UserDTO[]> {
    try {
      const users = await UserRepository.getAllUsers();     
      if (!users) throw new Error('Usuarios no encontrados');
      return users;
    } catch (error: any) {
      throw new Error(`Error al obtener usuarios: ${(error as Error).message}`);
    }
  }

  async getUserById(userId: string): Promise<UserDTO | null> {
    try {
      const user = await UserRepository.getUserById(userId);
      if (!user) throw new Error("El usuario no existe");
      return user;
    } catch (error) {
      throw new Error(`Error al obtener usuarios: ${(error as Error).message}`);
    }
  }

  async findOne(email: string) {
    try {
      const user = await UserRepository.findOne(email);
      if (!user) throw new Error("El usuario no existe");
      return user;
    } catch (error) {
      throw new Error(`Error al obtener usuarios: ${(error as Error).message}`);
    }
  }

  async createUser(userData: UserInterface): Promise<any> {
    try {
      const { password, email, ...rest } = userData;
      const user = await UserRepository.findOne(userData);

      if (!user) throw new Error('Ya hay un usuario registrado con este correo');
      return await UserRepository.createUser({
        ...rest,
        email,
        password: createHash(password),
      });
    } catch (error) {
      throw new Error(`Error al obtener usuarios: ${(error as Error).message}`);
    }
  }

  async loogGoogle(userData: any): Promise<any> {
    try {
      const userInfo = jwtDecode(userData) as IPayload;
      const user: any = await UserRepository.findOne(userData);

      if (!user) {
        const newUser: any = {
          first_name: userInfo.given_name,
          last_name: userInfo.name,
          email: userInfo.email,
          password: `Google${userInfo.email}${secretGoogle}`,
          country: ':G',
          last_connection: new Date()
        };
        const { password, email, ...rest } = newUser;
        const userCreated = await UserRepository.createUser({
          ...rest,
          email,
          password: createHash(password),
        });

        return newUser;
      }
      return user;
    } catch (error) {
      throw new Error(`Error al actualizar usuario: ${(error as Error).message}`);
    }
  }

  async updateUser(userId: string, userData: any): Promise<UserDTO | null> {
    try {
      const user = await UserRepository.getUserById(userId);
      if (!user) throw new Error("El usuario no existe");
      if (userData.password) userData.password = createHash(userData.password!);
      return await UserRepository.updateUser(userId, userData);
    } catch (error: any) {
      throw new Error(`Error al actualizar usuario: ${(error as Error).message}`);
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      const user = await UserRepository.getUserById(userId);
      if (!user) throw new Error("El usuario no existe");
      await UserRepository.deleteUser(userId);
    } catch (error: any) {
      throw new Error(`Error al eliminar usuario: ${(error as Error).message}`);
    }
  }
}

export default new UserService();
