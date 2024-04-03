import { Model } from 'sequelize-typescript';
import { Stadiums } from '../../stadiums/model/stadium.model';
interface MediaCreationAttr {
    stadiumId: number;
    photo: string;
    description: string;
}
export declare class Media extends Model<Media, MediaCreationAttr> {
    id: number;
    stadiumId: number;
    photo: string;
    description: string;
    stadiums: Stadiums;
}
export {};
