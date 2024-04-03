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
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const media_model_1 = require("./model/media.model");
let MediaService = class MediaService {
    constructor(mediaModel) {
        this.mediaModel = mediaModel;
    }
    async create(createMediaDto) {
        return await this.mediaModel.create(createMediaDto);
    }
    async findAll() {
        return await this.mediaModel.findAll();
    }
    async findOne(id) {
        return await this.mediaModel.findByPk(id);
    }
    async update(id, updateMediaDto) {
        const med = await this.mediaModel.update(updateMediaDto, {
            where: { id },
            returning: true,
        });
        return med[1][0];
    }
    async remove(id) {
        const rowsAffected = await this.mediaModel.destroy({ where: { id } });
        if (rowsAffected === 0)
            return 'Not found';
        return 'successfully removed';
    }
};
exports.MediaService = MediaService;
exports.MediaService = MediaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(media_model_1.Media)),
    __metadata("design:paramtypes", [Object])
], MediaService);
//# sourceMappingURL=media.service.js.map