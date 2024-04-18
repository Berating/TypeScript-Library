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
exports.PaginationInput = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
let PaginationInput = class PaginationInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { defaultValue: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], PaginationInput.prototype, "page", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { defaultValue: 20, nullable: true }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], PaginationInput.prototype, "limit", void 0);
PaginationInput = __decorate([
    (0, type_graphql_1.ArgsType)()
], PaginationInput);
exports.PaginationInput = PaginationInput;
function PaginatedResponse(TItemClass) {
    let PaginatedResponseClass = class PaginatedResponseClass {
    };
    __decorate([
        (0, type_graphql_1.Field)(),
        __metadata("design:type", Number)
    ], PaginatedResponseClass.prototype, "page", void 0);
    __decorate([
        (0, type_graphql_1.Field)(() => [TItemClass]),
        __metadata("design:type", Array)
    ], PaginatedResponseClass.prototype, "items", void 0);
    __decorate([
        (0, type_graphql_1.Field)(),
        __metadata("design:type", Number)
    ], PaginatedResponseClass.prototype, "totalPages", void 0);
    __decorate([
        (0, type_graphql_1.Field)(),
        __metadata("design:type", Number)
    ], PaginatedResponseClass.prototype, "totalItems", void 0);
    PaginatedResponseClass = __decorate([
        (0, type_graphql_1.ObjectType)()
    ], PaginatedResponseClass);
    return PaginatedResponseClass;
}
exports.default = PaginatedResponse;
