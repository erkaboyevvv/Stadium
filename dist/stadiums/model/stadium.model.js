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
exports.Stadiums = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const confort_stadium_model_1 = require("../../confort_stadium/model/confort_stadium.model");
const category_model_1 = require("../../categories/models/category.model");
const user_model_1 = require("../../users/models/user.model");
const district_model_1 = require("../../district/models/district.model");
const region_model_1 = require("../../region/models/region.model");
const comfort_model_1 = require("../../comfort/models/comfort.model");
let Stadiums = class Stadiums extends sequelize_typescript_1.Model {
};
exports.Stadiums = Stadiums;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Stadium ID',
        required: false,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Stadiums.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category ID of the stadium',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => category_model_1.Category),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Stadiums.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Owner ID of the stadium',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Stadiums.prototype, "ownerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Contact information for the stadium',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Stadiums.prototype, "contactWith", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the stadium',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Stadiums.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Volume of the stadium',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Stadiums.prototype, "volume", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Address of the stadium',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Stadiums.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Region ID of the stadium',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => region_model_1.Region),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Stadiums.prototype, "regionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'District ID of the stadium',
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => district_model_1.District),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Stadiums.prototype, "districtId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Location of the stadium',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Stadiums.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date when the stadium was built',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        defaultValue: Date.now(),
    }),
    __metadata("design:type", Date)
], Stadiums.prototype, "buildAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Starting time of stadium operations',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Stadiums.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ending time of stadium operations',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Stadiums.prototype, "endTime", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => category_model_1.Category),
    __metadata("design:type", category_model_1.Category)
], Stadiums.prototype, "category", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Stadiums.prototype, "users", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => region_model_1.Region),
    __metadata("design:type", region_model_1.Region)
], Stadiums.prototype, "region", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => district_model_1.District),
    __metadata("design:type", district_model_1.District)
], Stadiums.prototype, "district", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => comfort_model_1.Comfort, () => confort_stadium_model_1.ComfortStadium),
    __metadata("design:type", Array)
], Stadiums.prototype, "comfort", void 0);
exports.Stadiums = Stadiums = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'stadiums' })
], Stadiums);
//# sourceMappingURL=stadium.model.js.map