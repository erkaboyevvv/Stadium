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
exports.BotUpdate = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegraf_1 = require("telegraf");
let BotUpdate = class BotUpdate {
    async onStart(ctx) {
        ctx.reply('Salom');
    }
    async onPhoto(ctx) {
        if ('photo' in ctx.message) {
            console.log(ctx.message.photo);
            await ctx.replyWithPhoto(String(ctx.message.photo[ctx.message.photo.length - 1].file_id));
        }
    }
    async onVideo(ctx) {
        if ('video' in ctx.message) {
            console.log(ctx.message.video);
            await ctx.reply(String(ctx.message.video.file_id));
        }
    }
    async onSticker(ctx) {
        if ('sticker' in ctx.message) {
            console.log(ctx.message.sticker);
            await ctx.reply('🤣');
        }
    }
    async onAnimation(ctx) {
        if ('animation' in ctx.message) {
            console.log(ctx.message.animation);
            await ctx.reply('animate');
        }
    }
    async onContact(ctx) {
        if ('contact' in ctx.message) {
            console.log(ctx.message.contact);
            await ctx.reply(ctx.message.contact.phone_number);
            await ctx.reply(ctx.message.contact.first_name);
            await ctx.reply(String(ctx.message.contact.user_id));
        }
    }
    async onLocation(ctx) {
        if ('location' in ctx.message) {
            console.log(ctx.message.location);
            await ctx.reply(String(ctx.message.location.latitude));
            await ctx.reply(String(ctx.message.location.longitude));
            await ctx.replyWithLocation(ctx.message.location.longitude, ctx.message.location.longitude);
        }
    }
    async onVoice(ctx) {
        if ('voice' in ctx.message) {
            console.log(ctx.message.voice);
            await ctx.reply(String(ctx.message.voice.duration));
        }
    }
    async onInVoice(ctx) {
        if ('invoice' in ctx.message) {
            console.log(ctx.message.invoice);
            await ctx.reply(String(ctx.message.invoice.title));
        }
    }
    async onDocument(ctx) {
        if ('document' in ctx.message) {
            console.log(ctx.message.document);
            await ctx.reply(String(ctx.message.document.file_name));
        }
    }
    async hearsHi(ctx) {
        await ctx.reply('Haaaaaay gaaay');
    }
    async helpCommand(ctx) {
        await ctx.reply('Charchaaaaaddiiiiiiiiiiiiiim');
    }
    async onText(ctx) {
        console.log(ctx);
        if ('text' in ctx.message) {
            if (ctx.message.text == 'salom') {
                await ctx.replyWithHTML('<b>Hello</b>');
            }
            else {
                await ctx.replyWithHTML(ctx.message.text);
            }
        }
    }
    async onMessage(ctx) {
        console.log(ctx);
        console.log(ctx.botInfo);
        console.log(ctx.chat);
        console.log(ctx.chat.id);
        console.log(ctx.from);
        console.log(ctx.from.first_name);
    }
};
exports.BotUpdate = BotUpdate;
__decorate([
    (0, nestjs_telegraf_1.Start)(),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onStart", null);
__decorate([
    (0, nestjs_telegraf_1.On)('photo'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onPhoto", null);
__decorate([
    (0, nestjs_telegraf_1.On)('video'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onVideo", null);
__decorate([
    (0, nestjs_telegraf_1.On)('sticker'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onSticker", null);
__decorate([
    (0, nestjs_telegraf_1.On)('animation'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onAnimation", null);
__decorate([
    (0, nestjs_telegraf_1.On)('contact'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onContact", null);
__decorate([
    (0, nestjs_telegraf_1.On)('location'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onLocation", null);
__decorate([
    (0, nestjs_telegraf_1.On)('voice'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onVoice", null);
__decorate([
    (0, nestjs_telegraf_1.On)('invoice'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onInVoice", null);
__decorate([
    (0, nestjs_telegraf_1.On)('document'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onDocument", null);
__decorate([
    (0, nestjs_telegraf_1.Hears)('hi'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "hearsHi", null);
__decorate([
    (0, nestjs_telegraf_1.Command)('help'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "helpCommand", null);
__decorate([
    (0, nestjs_telegraf_1.On)('text'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onText", null);
__decorate([
    (0, nestjs_telegraf_1.On)('message'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "onMessage", null);
exports.BotUpdate = BotUpdate = __decorate([
    (0, nestjs_telegraf_1.Update)()
], BotUpdate);
//# sourceMappingURL=bot.update.js.map