import { Model } from 'sequelize-typescript';
interface IDistrictCreationAttr {
    name: string;
    regionId: number;
}
export declare class District extends Model<District, IDistrictCreationAttr> {
    id: number;
    name: string;
}
export {};
