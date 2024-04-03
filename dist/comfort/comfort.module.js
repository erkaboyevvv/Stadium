"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComfortModule = void 0;
const common_1 = require("@nestjs/common");
const comfort_service_1 = require("./comfort.service");
const comfort_controller_1 = require("./comfort.controller");
const sequelize_1 = require("@nestjs/sequelize");
const comfort_model_1 = require("./models/comfort.model");
let ComfortModule = class ComfortModule {
};
exports.ComfortModule = ComfortModule;
exports.ComfortModule = ComfortModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([comfort_model_1.Comfort])],
        controllers: [comfort_controller_1.ComfortController],
        providers: [comfort_service_1.ComfortService],
    })
], ComfortModule);
//# sourceMappingURL=comfort.module.js.map