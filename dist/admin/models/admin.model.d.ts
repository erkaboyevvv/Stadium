import { Model } from 'sequelize-typescript';
interface AdminCreationAttr {
    login: string;
    tgLink: string;
    adminPhoto: string;
    hashedPassword: string;
}
export declare class Admin extends Model<Admin, AdminCreationAttr> {
    id: number;
    login: string;
    tgLink: string;
    adminPhoto: string;
    hashedPassword: string;
    isActive: boolean;
    isCreator: boolean;
    hashedRefreshToken: string;
    activationLink: string;
}
export {};
