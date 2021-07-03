"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const parsers_controllers_1 = __importDefault(require("../controllers/parsers.controllers"));
const parsersRouter = express_1.default.Router();
parsersRouter.all("/parsers/specifiedFormatCall", parsers_controllers_1.default.parseSpecifiedFormatCall);
exports.default = parsersRouter;
//# sourceMappingURL=parsers.routes.js.map