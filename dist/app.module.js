"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const user_model_1 = require("./users/models/user.model");
const comfort_module_1 = require("./comfort/comfort.module");
const comfort_model_1 = require("./comfort/models/comfort.model");
const categories_module_1 = require("./categories/categories.module");
const category_model_1 = require("./categories/models/category.model");
const district_module_1 = require("./district/district.module");
const district_model_1 = require("./district/models/district.model");
const region_module_1 = require("./region/region.module");
const admin_module_1 = require("./admin/admin.module");
const region_model_1 = require("./region/models/region.model");
const admin_model_1 = require("./admin/models/admin.model");
const mail_module_1 = require("./mail/mail.module");
const bot_module_1 = require("./bot/bot.module");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const app_constants_1 = require("./app.constants");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_telegraf_1.TelegrafModule.forRootAsync({
                botName: app_constants_1.BOT_NAME,
                useFactory: () => ({
                    token: process.env.BOT_TOKEN,
                    middlewares: [],
                    include: [bot_module_1.BotModule],
                }),
            }),
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [user_model_1.User, comfort_model_1.Comfort, category_model_1.Category, district_model_1.District, region_model_1.Region, admin_model_1.Admin],
                autoLoadModels: true,
                sync: { alter: true },
                logging: true,
            }),
            users_module_1.UsersModule,
            comfort_module_1.ComfortModule,
            categories_module_1.CategoriesModule,
            district_module_1.DistrictModule,
            region_module_1.RegionModule,
            admin_module_1.AdminModule,
            mail_module_1.MailModule,
            bot_module_1.BotModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map