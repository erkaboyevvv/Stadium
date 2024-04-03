import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './models/district.model';
export declare class DistrictService {
    private districtDto;
    constructor(districtDto: typeof District);
    create(createDistrictDto: CreateDistrictDto): Promise<District>;
    findAll(): Promise<District[]>;
    findOne(id: number): Promise<District>;
    update(id: number, updateDistrictDto: UpdateDistrictDto): Promise<void>;
    remove(id: number): Promise<number>;
}
