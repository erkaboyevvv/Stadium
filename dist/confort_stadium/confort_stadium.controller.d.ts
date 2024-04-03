import { ConfortStadiumService } from './confort_stadium.service';
import { CreateConfortStadiumDto } from './dto/create-confort_stadium.dto';
import { UpdateConfortStadiumDto } from './dto/update-confort_stadium.dto';
export declare class ConfortStadiumController {
    private readonly confortStadiumService;
    constructor(confortStadiumService: ConfortStadiumService);
    create(createConfortStadiumDto: CreateConfortStadiumDto): Promise<import("src/confort_stadium/model/confort_stadium.model").ComfortStadium>;
    findAll(): Promise<import("src/confort_stadium/model/confort_stadium.model").ComfortStadium[]>;
    findOne(id: string): Promise<import("src/confort_stadium/model/confort_stadium.model").ComfortStadium>;
    update(id: string, updateConfortStadiumDto: UpdateConfortStadiumDto): Promise<import("src/confort_stadium/model/confort_stadium.model").ComfortStadium>;
    remove(id: string): Promise<"Not found" | "successfully removed">;
}
