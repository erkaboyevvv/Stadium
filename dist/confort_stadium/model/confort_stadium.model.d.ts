import { Model } from 'sequelize-typescript';
import { Stadiums } from '../../stadiums/model/stadium.model';
import { Comfort } from '../../comfort/models/comfort.model';
interface ComfortStadiumCreationAttr {
    stadiumId: number;
    comfortId: number;
}
export declare class ComfortStadium extends Model<ComfortStadium, ComfortStadiumCreationAttr> {
    id: number;
    stadiumId: number;
    comfortId: number;
    stadium: Stadiums;
    comfort: Comfort;
}
export {};
