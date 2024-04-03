"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const start = async () => {
    try {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Stadium finder')
            .setDescription('Mini project for Stadium finder')
            .setVersion('1.0.0')
            .addTag('NodeJS,NestJs,Postgres,Sequelize,JWT,Swagger,Bot,SMS,Mailer')
            .build();
        const PORT = process.env.PORT || 3030;
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.useGlobalPipes(new common_1.ValidationPipe());
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('/docs', app, document);
        app.use(cookieParser());
        app.setGlobalPrefix('api');
        app.useGlobalPipes(new common_1.ValidationPipe());
        await app.listen(PORT, () => {
            console.log(`listening on ${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
//# sourceMappingURL=main.js.map