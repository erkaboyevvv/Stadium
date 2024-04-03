import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { Response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    registraion(createUserDto: CreateUserDto, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    activate(link: string): Promise<{
        message: string;
        user: boolean;
    }>;
    login(loginUserDto: LoginUserDto, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    logout(refresToken: string, res: Response): Promise<{
        message: string;
        user_refresh_token: string;
    }>;
    refresh(id: number, refresToken: string, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
    findUser(findUserDto: LoginUserDto): Promise<User[]>;
}
