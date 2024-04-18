"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authChecker = void 0;
const authChecker = ({ context: { user, }, }, roles) => {
    if (!(user === null || user === void 0 ? void 0 : user.roles)) {
        return false;
    }
    return user.roles.some((role) => roles.includes(role));
};
exports.authChecker = authChecker;
