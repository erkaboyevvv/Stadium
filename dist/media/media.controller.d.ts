import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    create(createMediaDto: CreateMediaDto): Promise<import("src/media/model/media.model").Media>;
    findAll(): Promise<import("src/media/model/media.model").Media[]>;
    findOne(id: string): Promise<import("src/media/model/media.model").Media>;
    update(id: string, updateMediaDto: UpdateMediaDto): Promise<import("src/media/model/media.model").Media>;
    remove(id: string): Promise<"Not found" | "successfully removed">;
}
