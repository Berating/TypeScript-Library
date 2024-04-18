"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCodes = void 0;
const errors_1 = require("@apollo/server/errors");
exports.ErrorCodes = {
    ...errors_1.ApolloServerErrorCode,
    UNAUTHENTICATED: 'UNAUTHENTICATED',
};
