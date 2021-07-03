"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const _1 = require(".");
exports.Post = _1.sequelize.define("post", {
    username: {
        type: sequelize_1.default.TEXT,
    },
    text: {
        type: sequelize_1.default.TEXT
    }
});
//# sourceMappingURL=post.js.map