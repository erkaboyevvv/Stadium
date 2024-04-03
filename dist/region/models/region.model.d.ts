import { Model } from 'sequelize-typescript';
interface IRegionCreationAttr {
    name: string;
}
export declare class Region extends Model<Region, IRegionCreationAttr> {
    id: number;
    name: string;
}
export {};
