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
exports.CreateMediaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateMediaDto {
}
exports.CreateMediaDto = CreateMediaDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the stadium associated with the media',
        required: true,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'Stadium ID must be a number' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Stadium ID is required' }),
    __metadata("design:type", Number)
], CreateMediaDto.prototype, "stadiumId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL or file path of the media/photo',
        required: true,
    }),
    (0, class_validator_1.IsString)({ message: 'Photo must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Photo URL/path is required' }),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description or caption for the media',
        required: true,
    }),
    (0, class_validator_1.IsString)({ message: 'Description must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Description is required' }),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "description", void 0);
//# sourceMappingURL=create-media.dto.js.map