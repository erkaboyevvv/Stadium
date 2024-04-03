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
exports.Media = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const stadium_model_1 = require("../../stadiums/model/stadium.model");
let Media = class Media extends sequelize_typescript_1.Model {
};
exports.Media = Media;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique identifier for the media entry',
        required: false,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Media.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the stadium associated with the media',
        required: true,
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => stadium_model_1.Stadiums),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Media.prototype, "stadiumId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL or file path of the media/photo',
        required: true,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Media.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description or caption for the media',
        required: true,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Media.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => stadium_model_1.Stadiums),
    __metadata("design:type", stadium_model_1.Stadiums)
], Media.prototype, "stadiums", void 0);
exports.Media = Media = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'media' })
], Media);
//# sourceMappingURL=media.model.js.map