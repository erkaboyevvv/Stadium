import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
import { Stadiums } from './model/stadium.model';
export declare class StadiumsService {
    private readonly stadiumModel;
    constructor(stadiumModel: typeof Stadiums);
    create(createStadiumDto: CreateStadiumDto): Promise<Stadiums>;
    findAll(): Promise<Stadiums[]>;
    findOne(id: number): Promise<Stadiums>;
    update(id: number, updateStadiumDto: UpdateStadiumDto): Promise<Stadiums>;
    remove(id: number): Promise<"Not found" | "successfully removed">;
}
