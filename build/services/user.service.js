"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_schema_1 = require("../schema/user.schema");
const pagination_service_1 = require("./pagination.service");
const error_1 = require("../utils/error");
const error_codes_1 = require("../constants/error-codes");
const token_1 = require("../utils/token");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UserService {
    async getUsers(paginatedInput) {
        const userPaginationServices = new pagination_service_1.PaginationService({ model: user_schema_1.UserModel });
        return userPaginationServices.getPaginatedItems(paginatedInput);
    }
    async getUser(_id) {
        return user_schema_1.UserModel.findById(_id).lean();
    }
    async createUser(user) {
        const password = bcryptjs_1.default.hashSync(user.password, 10);
        const userData = { ...user, password };
        const createdUser = await user_schema_1.UserModel.create(userData);
        return (0, token_1.generateToken)(createdUser._id, createdUser.roles);
    }
    async deleteUser(_id) {
        return user_schema_1.UserModel.findByIdAndRemove(_id);
    }
    async updateUser(_id, user) {
        return user_schema_1.UserModel.findByIdAndUpdate(_id, user, { new: true });
    }
    async login(email, password) {
        const user = await user_schema_1.UserModel.findOne({ email }).lean();
        if (!user) {
            throw (0, error_1.AppError)('User not found', error_codes_1.ErrorCodes.BAD_USER_INPUT);
        }
        const isMatching = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatching) {
            throw (0, error_1.AppError)('User not found', error_codes_1.ErrorCodes.BAD_USER_INPUT);
        }
        return (0, token_1.generateToken)(user._id, user.roles);
    }
    async currentUser(user) {
        if (!(user === null || user === void 0 ? void 0 : user._id)) {
            throw (0, error_1.AppError)('Unauthenticated', error_codes_1.ErrorCodes.UNAUTHENTICATED);
        }
        return user_schema_1.UserModel.findById(user._id).lean();
    }
}
exports.UserService = UserService;
