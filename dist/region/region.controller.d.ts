import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
export declare class RegionController {
    private readonly regionService;
    constructor(regionService: RegionService);
    create(createRegionDto: CreateRegionDto): Promise<import("src/region/models/region.model").Region>;
    findAll(): Promise<import("src/region/models/region.model").Region[]>;
    findOne(id: string): Promise<import("src/region/models/region.model").Region>;
    update(id: string, updateRegionDto: UpdateRegionDto): Promise<import("src/region/models/region.model").Region>;
    remove(id: string): Promise<number>;
}
