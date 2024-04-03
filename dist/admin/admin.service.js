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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const uuid_1 = require("uuid");
const admin_model_1 = require("./models/admin.model");
let AdminService = class AdminService {
    constructor(adminRepo, jwtService) {
        this.adminRepo = adminRepo;
        this.jwtService = jwtService;
    }
    async getTokens(admin) {
        const payload = {
            id: admin.id,
            isActive: admin.isActive,
            isOwner: admin.isCreator,
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return {
            access_token: accessToken,
            refresh_token: refreshToken,
        };
    }
    async registration(createAdminDto, res) {
        const admin = await this.adminRepo.findOne({
            where: { login: createAdminDto.login },
        });
        if (admin) {
            throw new common_1.BadRequestException('This admin already exists');
        }
        if (createAdminDto.password !== createAdminDto.confirmPassword) {
            throw new common_1.BadRequestException('Password does not match');
        }
        const hashedPassword = await bcrypt.hash(createAdminDto.password, 7);
        const newAdmin = await this.adminRepo.create({
            ...createAdminDto,
            hashedPassword,
        });
        const tokens = await this.getTokens(newAdmin);
        const hashedRefreshToken = await bcrypt.hash(tokens.refresh_token, 7);
        const activationLink = (0, uuid_1.v4)();
        const updatedadmin = await this.adminRepo.update({ hashedRefreshToken, activationLink }, { where: { id: newAdmin.id }, returning: true });
        res.cookie('refresh_token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'Admin registered',
            admin: updatedadmin[1][0],
            tokens,
        };
        return response;
    }
    async login(loginAdminDto, res) {
        const { login, password } = loginAdminDto;
        const admin = await this.adminRepo.findOne({ where: { login } });
        if (!admin) {
            throw new common_1.BadRequestException('admin not found');
        }
        const isMatchPass = await bcrypt.compare(password, admin.hashedPassword);
        if (!isMatchPass) {
            throw new common_1.BadRequestException('Password is not match');
        }
        const tokens = await this.getTokens(admin);
        const hashedRefreshToken = await bcrypt.hash(tokens.refresh_token, 7);
        const updatedadmin = await this.adminRepo.update({ hashedRefreshToken }, { where: { id: admin.id }, returning: true });
        res.cookie('refresh_token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'admin registered',
            admin: updatedadmin[1][0],
            tokens,
        };
        return response;
    }
    async logout(refreshToken, res) {
        const userData = await this.jwtService.verify(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY,
        });
        if (!userData) {
            throw new common_1.ForbiddenException('Admin not verified');
        }
        const updateAdmin = await this.adminRepo.update({
            hashedPassword: null,
        }, {
            where: { id: userData.id },
            returning: true,
        });
        res.clearCookie('refresh_token');
        const reponse = {
            message: 'admin logged out successfully',
            user_refresh_token: updateAdmin[1][0].hashedRefreshToken,
        };
        return reponse;
    }
    async refreshToken(userId, refreshToken, res) {
        console.log(refreshToken);
        const decodecToken = await this.jwtService.decode(refreshToken);
        if (userId != decodecToken['id']) {
            throw new common_1.BadRequestException('admin not found');
        }
        const admin = await this.adminRepo.findOne({ where: { id: userId } });
        if (!admin || !admin.hashedRefreshToken) {
            throw new common_1.BadRequestException('admin not found');
        }
        const tokenMatch = await bcrypt.compare(refreshToken, admin.hashedRefreshToken);
        if (!tokenMatch) {
            throw new common_1.ForbiddenException('Forbiddin');
        }
        const tokens = await this.getTokens(admin);
        const hashedRefreshToken = await bcrypt.hash(tokens.refresh_token, 7);
        const updatedUser = await this.adminRepo.update({ hashedRefreshToken }, { where: { id: admin.id }, returning: true });
        res.cookie('refresh_token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'admin refreshed',
            admin: updatedUser[1][0],
            tokens,
        };
        return response;
    }
    async create(createAdminDto) {
        return this.adminRepo.create(createAdminDto);
    }
    async findAll() {
        return this.adminRepo.findAll();
    }
    async findOne(id) {
        return this.adminRepo.findByPk(id);
    }
    async update(id, updateAdminDto) {
        const admin = await this.adminRepo.update(updateAdminDto, {
            where: { id },
            returning: true,
        });
        return admin[1][0];
    }
    async remove(id) {
        const adminRows = await this.adminRepo.destroy({ where: { id } });
        if (adminRows == 0)
            return 'Not found';
        return 'successfully removed';
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(admin_model_1.Admin)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AdminService);
//# sourceMappingURL=admin.service.js.map