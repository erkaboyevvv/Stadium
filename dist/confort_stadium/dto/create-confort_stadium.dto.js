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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConfortStadiumDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateConfortStadiumDto {
}
exports.CreateConfortStadiumDto = CreateConfortStadiumDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the stadium associated with the comfort',
        required: true,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'Stadium ID must be a number' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Stadium ID is required' }),
    __metadata("design:type", Number)
], CreateConfortStadiumDto.prototype, "stadiumId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the comfort associated with the stadium',
        required: true,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'Comfort ID must be a number' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Comfort ID is required' }),
    __metadata("design:type", Number)
], CreateConfortStadiumDto.prototype, "comfortId", void 0);
//# sourceMappingURL=create-confort_stadium.dto.js.map