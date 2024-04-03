import { ComfortService } from './comfort.service';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
export declare class ComfortController {
    private readonly comfortService;
    constructor(comfortService: ComfortService);
    create(createComfortDto: CreateComfortDto): Promise<import("src/comfort/models/comfort.model").Comfort>;
    findAll(): Promise<import("src/comfort/models/comfort.model").Comfort[]>;
    findOne(id: string): Promise<import("src/comfort/models/comfort.model").Comfort>;
    update(id: string, updateComfortDto: UpdateComfortDto): Promise<import("src/comfort/models/comfort.model").Comfort>;
    remove(id: string): Promise<number>;
}
