"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parser_services_1 = __importDefault(require("../services/parser.services"));
const parseSpecifiedFormatCall = async (req, res) => {
    let value = "";
    if (req.method === "GET") {
        value = req.query.value;
    }
    else {
        value = req.body.value;
    }
    if (!value) {
        res.status(400).json({
            error: "invalid value"
        });
    }
    const result = await parser_services_1.default.ParseSpecifiedFormatCall(value);
    res.status(result.error ? 500 : 200).json(result);
};
exports.default = {
    parseSpecifiedFormatCall
};
//# sourceMappingURL=parsers.controllers.js.map