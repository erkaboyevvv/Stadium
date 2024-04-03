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
exports.ConfortStadiumService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const confort_stadium_model_1 = require("./model/confort_stadium.model");
let ConfortStadiumService = class ConfortStadiumService {
    constructor(confortStadiumModel) {
        this.confortStadiumModel = confortStadiumModel;
    }
    async create(createConfortStadiumDto) {
        return await this.confortStadiumModel.create(createConfortStadiumDto);
    }
    async findAll() {
        return await this.confortStadiumModel.findAll();
    }
    async findOne(id) {
        return await this.confortStadiumModel.findByPk(id);
    }
    async update(id, updateConfortStadiumDto) {
        const com = await this.confortStadiumModel.update(updateConfortStadiumDto, {
            where: { id },
            returning: true,
        });
        return com[1][0];
    }
    async remove(id) {
        const rowsAffected = await this.confortStadiumModel.destroy({
            where: { id },
        });
        if (rowsAffected === 0)
            return 'Not found';
        return 'successfully removed';
    }
};
exports.ConfortStadiumService = ConfortStadiumService;
exports.ConfortStadiumService = ConfortStadiumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(confort_stadium_model_1.ComfortStadium)),
    __metadata("design:paramtypes", [Object])
], ConfortStadiumService);
//# sourceMappingURL=confort_stadium.service.js.map