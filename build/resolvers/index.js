"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const user_resolver_1 = require("./user.resolver");
const booking_resolver_1 = require("./booking.resolver");
exports.resolvers = [
    user_resolver_1.UserResolver,
    booking_resolver_1.BookingResolver,
];
