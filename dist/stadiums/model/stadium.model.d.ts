import { Model } from 'sequelize-typescript';
import { Category } from '../../categories/models/category.model';
import { User } from '../../users/models/user.model';
import { District } from '../../district/models/district.model';
import { Region } from '../../region/models/region.model';
import { Comfort } from '../../comfort/models/comfort.model';
interface StadiumCreationAttr {
    categoryId: number;
    ownerId: number;
    contactWith: string;
    name: string;
    volume: string;
    address: string;
    regionId: number;
    districtId: number;
    location: string;
    buildAt: Date;
    startTime: number;
    endTime: number;
}
export declare class Stadiums extends Model<Stadiums, StadiumCreationAttr> {
    id: number;
    categoryId: number;
    ownerId: number;
    contactWith: string;
    name: string;
    volume: string;
    address: string;
    regionId: number;
    districtId: number;
    location: string;
    buildAt: Date;
    startTime: number;
    endTime: number;
    category: Category;
    users: User;
    region: Region;
    district: District;
    comfort: Comfort[];
}
export {};
