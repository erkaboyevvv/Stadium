import { CreateConfortStadiumDto } from './dto/create-confort_stadium.dto';
import { UpdateConfortStadiumDto } from './dto/update-confort_stadium.dto';
import { ComfortStadium } from './model/confort_stadium.model';
export declare class ConfortStadiumService {
    private readonly confortStadiumModel;
    constructor(confortStadiumModel: typeof ComfortStadium);
    create(createConfortStadiumDto: CreateConfortStadiumDto): Promise<ComfortStadium>;
    findAll(): Promise<ComfortStadium[]>;
    findOne(id: number): Promise<ComfortStadium>;
    update(id: number, updateConfortStadiumDto: UpdateConfortStadiumDto): Promise<ComfortStadium>;
    remove(id: number): Promise<"Not found" | "successfully removed">;
}
