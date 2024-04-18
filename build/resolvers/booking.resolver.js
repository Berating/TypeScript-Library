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
exports.BookingResolver = void 0;
const type_graphql_1 = require("type-graphql");
const pagination_schema_1 = require("../schema/pagination.schema");
const user_role_1 = require("../enums/user-role");
const booking_service_1 = require("../services/booking.service");
const booking_schema_1 = require("../schema/booking.schema");
let BookingResolver = class BookingResolver {
    constructor(bookingService) {
        this.bookingService = bookingService;
        this.bookingService = new booking_service_1.BookingService();
    }
    async bookings(paginatedInput) {
        return this.bookingService.getBookings(paginatedInput);
    }
    async booking(_id) {
        return this.bookingService.getBooking(_id);
    }
    async createBooking({ user }, booking) {
        return this.bookingService.createBooking(booking, user._id);
    }
    async deleteBooking(_id) {
        return this.bookingService.deleteBooking(_id);
    }
    async updateBooking(_id, booking) {
        return this.bookingService.updateBooking(_id, booking);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => booking_schema_1.PaginatedBookingResponse),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_schema_1.PaginationInput]),
    __metadata("design:returntype", Promise)
], BookingResolver.prototype, "bookings", null);
__decorate([
    (0, type_graphql_1.Query)(() => booking_schema_1.Booking),
    __param(0, (0, type_graphql_1.Arg)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingResolver.prototype, "booking", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => booking_schema_1.Booking),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('booking')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, booking_schema_1.BookingInput]),
    __metadata("design:returntype", Promise)
], BookingResolver.prototype, "createBooking", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_role_1.UserRole.SUPER_ADMIN, user_role_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => booking_schema_1.Booking),
    __param(0, (0, type_graphql_1.Arg)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingResolver.prototype, "deleteBooking", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => booking_schema_1.Booking),
    __param(0, (0, type_graphql_1.Arg)('_id')),
    __param(1, (0, type_graphql_1.Arg)('booking')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, booking_schema_1.BookingInput]),
    __metadata("design:returntype", Promise)
], BookingResolver.prototype, "updateBooking", null);
BookingResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [booking_service_1.BookingService])
], BookingResolver);
exports.BookingResolver = BookingResolver;
