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
exports.ConfortStadiumController = void 0;
const common_1 = require("@nestjs/common");
const confort_stadium_service_1 = require("./confort_stadium.service");
const create_confort_stadium_dto_1 = require("./dto/create-confort_stadium.dto");
const update_confort_stadium_dto_1 = require("./dto/update-confort_stadium.dto");
let ConfortStadiumController = class ConfortStadiumController {
    constructor(confortStadiumService) {
        this.confortStadiumService = confortStadiumService;
    }
    async create(createConfortStadiumDto) {
        return this.confortStadiumService.create(createConfortStadiumDto);
    }
    async findAll() {
        return this.confortStadiumService.findAll();
    }
    async findOne(id) {
        return this.confortStadiumService.findOne(+id);
    }
    async update(id, updateConfortStadiumDto) {
        return this.confortStadiumService.update(+id, updateConfortStadiumDto);
    }
    async remove(id) {
        return this.confortStadiumService.remove(+id);
    }
};
exports.ConfortStadiumController = ConfortStadiumController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_confort_stadium_dto_1.CreateConfortStadiumDto]),
    __metadata("design:returntype", Promise)
], ConfortStadiumController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfortStadiumController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConfortStadiumController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_confort_stadium_dto_1.UpdateConfortStadiumDto]),
    __metadata("design:returntype", Promise)
], ConfortStadiumController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConfortStadiumController.prototype, "remove", null);
exports.ConfortStadiumController = ConfortStadiumController = __decorate([
    (0, common_1.Controller)('confort-stadium'),
    __metadata("design:paramtypes", [confort_stadium_service_1.ConfortStadiumService])
], ConfortStadiumController);
//# sourceMappingURL=confort_stadium.controller.js.map