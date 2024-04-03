import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './model/media.model';
export declare class MediaService {
    private readonly mediaModel;
    constructor(mediaModel: typeof Media);
    create(createMediaDto: CreateMediaDto): Promise<Media>;
    findAll(): Promise<Media[]>;
    findOne(id: number): Promise<Media>;
    update(id: number, updateMediaDto: UpdateMediaDto): Promise<Media>;
    remove(id: number): Promise<"Not found" | "successfully removed">;
}
