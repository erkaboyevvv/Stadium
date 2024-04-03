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
exports.StadiumsController = void 0;
const common_1 = require("@nestjs/common");
const stadiums_service_1 = require("./stadiums.service");
const create_stadium_dto_1 = require("./dto/create-stadium.dto");
const update_stadium_dto_1 = require("./dto/update-stadium.dto");
let StadiumsController = class StadiumsController {
    constructor(stadiumsService) {
        this.stadiumsService = stadiumsService;
    }
    async create(createStadiumDto) {
        return this.stadiumsService.create(createStadiumDto);
    }
    async findAll() {
        return this.stadiumsService.findAll();
    }
    async findOne(id) {
        return this.stadiumsService.findOne(+id);
    }
    async update(id, updateStadiumDto) {
        return this.stadiumsService.update(+id, updateStadiumDto);
    }
    async remove(id) {
        return this.stadiumsService.remove(+id);
    }
};
exports.StadiumsController = StadiumsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_stadium_dto_1.CreateStadiumDto]),
    __metadata("design:returntype", Promise)
], StadiumsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StadiumsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StadiumsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_stadium_dto_1.UpdateStadiumDto]),
    __metadata("design:returntype", Promise)
], StadiumsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StadiumsController.prototype, "remove", null);
exports.StadiumsController = StadiumsController = __decorate([
    (0, common_1.Controller)('stadiums'),
    __metadata("design:paramtypes", [stadiums_service_1.StadiumsService])
], StadiumsController);
//# sourceMappingURL=stadiums.controller.js.map