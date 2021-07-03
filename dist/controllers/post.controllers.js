"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const post_services_1 = __importDefault(require("../services/post.services"));
const postList = async (req, res) => {
    let sort = req.query.sort;
    let limit = req.query.limit ? parseInt(req.query.limit.toString()) : undefined;
    let offset = req.query.offset ? parseInt(req.query.offset.toString()) : undefined;
    let ids = req.query.ids ? req.query.ids.toString()
        .split(",")
        .map(id => parseInt(id))
        .filter(id => !isNaN(id))
        : [];
    if (!(sort && ["asc", "desc"].includes(sort.toString().toLocaleLowerCase()))) {
        sort = "desc";
    }
    const [posts, count] = await post_services_1.default.List(ids, sort, limit, offset);
    res.json({
        posts: posts.map(post => post.toJSON()),
        count,
        sort
    });
};
const postCreate = async (req, res) => {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { username, text } = req.body;
    const [upsertedPost, status] = await post_services_1.default.Create({
        username: username,
        text: text
    });
    res.json({
        upsertedStatus: upsertedPost?.toJSON(),
        status
    });
};
exports.default = {
    postList,
    postCreate,
};
//# sourceMappingURL=post.controllers.js.map