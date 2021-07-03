"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const post_controllers_1 = __importDefault(require("../controllers/post.controllers"));
const validators_1 = require("../utils/validators");
const postsRouter = express_1.default.Router();
postsRouter.get("/posts", post_controllers_1.default.postList);
postsRouter.post("/posts", express_validator_1.body("username").custom(validators_1.isNotLatin).custom(validators_1.isNotOnlyNumbers), express_validator_1.body("text").trim().notEmpty().withMessage("text is empty"), post_controllers_1.default.postCreate);
exports.default = postsRouter;
//# sourceMappingURL=posts.routes.js.map