import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("src/categories/models/category.model").Category>;
    findAll(): Promise<import("src/categories/models/category.model").Category[]>;
    findOne(id: string): Promise<import("src/categories/models/category.model").Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("src/categories/models/category.model").Category>;
    remove(id: string): Promise<number>;
}
