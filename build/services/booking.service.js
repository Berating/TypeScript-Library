"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const pagination_service_1 = require("./pagination.service");
const booking_schema_1 = require("../schema/booking.schema");
class BookingService {
    async getBookings(paginatedInput) {
        const userPaginationServices = new pagination_service_1.PaginationService({
            model: booking_schema_1.BookingModel,
            populate: 'user',
        });
        return userPaginationServices.getPaginatedItems(paginatedInput);
    }
    async getBooking(_id) {
        return booking_schema_1.BookingModel.findById(_id).populate('user').lean();
    }
    async createBooking(booking, user) {
        const bookingWithUser = { ...booking, user };
        const createdBooking = await booking_schema_1.BookingModel.create(bookingWithUser);
        return createdBooking.populate('user');
    }
    async deleteBooking(_id) {
        return booking_schema_1.BookingModel.findByIdAndRemove(_id).populate('user');
    }
    async updateBooking(_id, booking) {
        return booking_schema_1.BookingModel.findByIdAndUpdate(_id, booking, { new: true }).populate('user');
    }
}
exports.BookingService = BookingService;
