"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const region_model_1 = require("./models/region.model");
let RegionService = class RegionService {
    constructor(regionDto) {
        this.regionDto = regionDto;
    }
    create(createRegionDto) {
        return this.regionDto.create(createRegionDto);
    }
    findAll() {
        return this.regionDto.findAll();
    }
    findOne(id) {
        return this.regionDto.findByPk(id);
    }
    async update(id, updateRegionDto) {
        const region = await this.regionDto.update(updateRegionDto, {
            where: { id },
            returning: true,
        });
        return region[1][0];
    }
    remove(id) {
        return this.regionDto.destroy({ where: { id } });
    }
};
exports.RegionService = RegionService;
exports.RegionService = RegionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(region_model_1.Region)),
    __metadata("design:paramtypes", [Object])
], RegionService);
//# sourceMappingURL=region.service.js.map