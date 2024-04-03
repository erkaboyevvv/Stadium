import { Model } from 'sequelize-typescript';
interface ICategoryCreationAttr {
    name: string;
    parentId: number;
}
export declare class Category extends Model<Category, ICategoryCreationAttr> {
    id: number;
    name: string;
}
export {};
