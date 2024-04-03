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
exports.ComfortStadium = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const stadium_model_1 = require("../../stadiums/model/stadium.model");
const comfort_model_1 = require("../../comfort/models/comfort.model");
let ComfortStadium = class ComfortStadium extends sequelize_typescript_1.Model {
};
exports.ComfortStadium = ComfortStadium;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique identifier for the comfort-stadium relation',
        required: false,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], ComfortStadium.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the stadium associated with the comfort',
        required: true,
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => stadium_model_1.Stadiums),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ComfortStadium.prototype, "stadiumId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the comfort associated with the stadium',
        required: true,
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => comfort_model_1.Comfort),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ComfortStadium.prototype, "comfortId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => stadium_model_1.Stadiums),
    __metadata("design:type", stadium_model_1.Stadiums)
], ComfortStadium.prototype, "stadium", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => comfort_model_1.Comfort),
    __metadata("design:type", comfort_model_1.Comfort)
], ComfortStadium.prototype, "comfort", void 0);
exports.ComfortStadium = ComfortStadium = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'confort_stadium' })
], ComfortStadium);
//# sourceMappingURL=confort_stadium.model.js.map