import { Context } from 'telegraf';
export declare class BotUpdate {
    onStart(ctx: Context): Promise<void>;
    onPhoto(ctx: Context): Promise<void>;
    onVideo(ctx: Context): Promise<void>;
    onSticker(ctx: Context): Promise<void>;
    onAnimation(ctx: Context): Promise<void>;
    onContact(ctx: Context): Promise<void>;
    onLocation(ctx: Context): Promise<void>;
    onVoice(ctx: Context): Promise<void>;
    onInVoice(ctx: Context): Promise<void>;
    onDocument(ctx: Context): Promise<void>;
    hearsHi(ctx: Context): Promise<void>;
    helpCommand(ctx: Context): Promise<void>;
    onText(ctx: Context): Promise<void>;
    onMessage(ctx: Context): Promise<void>;
}
