"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserFromRequest = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateToken(_id, roles) {
    var _a;
    return jsonwebtoken_1.default.sign({
        _id,
        roles,
    }, process.env.JWT_SECRET, {
        expiresIn: (_a = process.env.TOKEN_EXPIRATION) !== null && _a !== void 0 ? _a : '1d',
    });
}
exports.generateToken = generateToken;
function getUserFromRequest(req) {
    const authorization = req.headers.authorization;
    let user = null;
    if (authorization) {
        const token = authorization.split(' ')[1];
        try {
            user = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        }
        catch (e) {
            console.log('Cannot verify token: ', e);
        }
    }
    return user;
}
exports.getUserFromRequest = getUserFromRequest;
