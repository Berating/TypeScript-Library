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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginArgs = exports.PaginatedUserResponse = exports.CreateUserInput = exports.BaseUserInput = exports.UserModel = exports.User = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const user_role_1 = require("../enums/user-role");
const object_id_scalar_1 = require("../object-id.scalar");
const class_validator_1 = require("class-validator");
const pagination_schema_1 = __importDefault(require("./pagination.schema"));
const model_schema_1 = require("./model.schema");
(0, type_graphql_1.registerEnumType)(user_role_1.UserRole, {
    name: 'UserRole',
});
let User = User_1 = class User extends model_schema_1.BaseModel {
};
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: [String], enum: user_role_1.UserRole, default: [user_role_1.UserRole.USER] }),
    (0, type_graphql_1.Field)(() => [user_role_1.UserRole]),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => User_1 }),
    (0, type_graphql_1.Field)(() => [User_1], { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "friends", void 0);
User = User_1 = __decorate([
    (0, type_graphql_1.ObjectType)()
], User);
exports.User = User;
exports.UserModel = (0, typegoose_1.getModelForClass)(User, { schemaOptions: { timestamps: true },
});
let BaseUserInput = class BaseUserInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], BaseUserInput.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], BaseUserInput.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], BaseUserInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BaseUserInput.prototype, "address", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [object_id_scalar_1.ObjectIdScalar], { nullable: true }),
    __metadata("design:type", Array)
], BaseUserInput.prototype, "friends", void 0);
BaseUserInput = __decorate([
    (0, type_graphql_1.InputType)()
], BaseUserInput);
exports.BaseUserInput = BaseUserInput;
let CreateUserInput = class CreateUserInput extends BaseUserInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
CreateUserInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateUserInput);
exports.CreateUserInput = CreateUserInput;
let PaginatedUserResponse = class PaginatedUserResponse extends (0, pagination_schema_1.default)(User) {
};
PaginatedUserResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], PaginatedUserResponse);
exports.PaginatedUserResponse = PaginatedUserResponse;
let UserLoginArgs = class UserLoginArgs {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserLoginArgs.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserLoginArgs.prototype, "password", void 0);
UserLoginArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], UserLoginArgs);
exports.UserLoginArgs = UserLoginArgs;
