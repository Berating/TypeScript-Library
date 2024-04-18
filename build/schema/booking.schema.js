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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedBookingResponse = exports.BookingInput = exports.BookingModel = exports.Booking = void 0;
const type_graphql_1 = require("type-graphql");
const model_schema_1 = require("./model.schema");
const typegoose_1 = require("@typegoose/typegoose");
const pagination_schema_1 = __importDefault(require("./pagination.schema"));
const class_validator_1 = require("class-validator");
const user_schema_1 = require("./user.schema");
let Booking = class Booking extends model_schema_1.BaseModel {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Booking.prototype, "place", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Booking.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Date)
], Booking.prototype, "bookingDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_schema_1.User),
    (0, typegoose_1.prop)({ ref: user_schema_1.User, required: true }),
    __metadata("design:type", Object)
], Booking.prototype, "user", void 0);
Booking = __decorate([
    (0, type_graphql_1.ObjectType)()
], Booking);
exports.Booking = Booking;
exports.BookingModel = (0, typegoose_1.getModelForClass)(Booking, { schemaOptions: { timestamps: true },
});
let BookingInput = class BookingInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], BookingInput.prototype, "place", void 0);
__decorate([
    (0, class_validator_1.MinLength)(3),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BookingInput.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, type_graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], BookingInput.prototype, "bookingDate", void 0);
BookingInput = __decorate([
    (0, type_graphql_1.InputType)()
], BookingInput);
exports.BookingInput = BookingInput;
let PaginatedBookingResponse = class PaginatedBookingResponse extends (0, pagination_schema_1.default)(Booking) {
};
PaginatedBookingResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], PaginatedBookingResponse);
exports.PaginatedBookingResponse = PaginatedBookingResponse;
