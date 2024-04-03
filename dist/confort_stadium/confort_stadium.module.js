"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfortStadiumModule = void 0;
const common_1 = require("@nestjs/common");
const confort_stadium_service_1 = require("./confort_stadium.service");
const confort_stadium_controller_1 = require("./confort_stadium.controller");
const sequelize_1 = require("@nestjs/sequelize");
const confort_stadium_model_1 = require("./model/confort_stadium.model");
let ConfortStadiumModule = class ConfortStadiumModule {
};
exports.ConfortStadiumModule = ConfortStadiumModule;
exports.ConfortStadiumModule = ConfortStadiumModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([confort_stadium_model_1.ComfortStadium])],
        controllers: [confort_stadium_controller_1.ConfortStadiumController],
        providers: [confort_stadium_service_1.ConfortStadiumService],
    })
], ConfortStadiumModule);
//# sourceMappingURL=confort_stadium.module.js.map