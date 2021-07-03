"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const post_1 = require("../models/post");
const Create = async (values) => {
    const upsertedPost = await post_1.Post.upsert(values);
    return upsertedPost;
};
const List = async (ids, sort = "asc", limit = 15, offset = 0) => {
    if (isNaN(limit))
        limit = 15;
    if (isNaN(offset))
        offset = 0;
    const posts = await post_1.Post.findAndCountAll({
        where: {
            id: ids.length ? { [sequelize_1.Op.in]: ids } : { [sequelize_1.Op.notIn]: [] }
        },
        order: [
            ["createdAt", sort]
        ],
        limit,
        offset
    });
    return [posts.rows, posts.count];
};
exports.default = {
    Create,
    List,
};
//# sourceMappingURL=post.services.js.map