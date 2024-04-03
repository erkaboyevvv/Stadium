import { StadiumsService } from './stadiums.service';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
export declare class StadiumsController {
    private readonly stadiumsService;
    constructor(stadiumsService: StadiumsService);
    create(createStadiumDto: CreateStadiumDto): Promise<import("src/stadiums/model/stadium.model").Stadiums>;
    findAll(): Promise<import("src/stadiums/model/stadium.model").Stadiums[]>;
    findOne(id: string): Promise<import("src/stadiums/model/stadium.model").Stadiums>;
    update(id: string, updateStadiumDto: UpdateStadiumDto): Promise<import("src/stadiums/model/stadium.model").Stadiums>;
    remove(id: string): Promise<"Not found" | "successfully removed">;
}
