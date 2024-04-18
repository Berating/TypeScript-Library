"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
const error_1 = require("graphql/error");
function AppError(message, code) {
    return new error_1.GraphQLError(message, {
        extensions: {
            code,
        },
    });
}
exports.AppError = AppError;
