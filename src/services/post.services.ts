import { Op } from "sequelize"
import { Post, PostAddModel, PostModel } from "../models/post"
import { Sort } from "../utils/sorts"


const Create = async (values: PostAddModel) => {
    const upsertedPost = await Post.upsert(values)

    return upsertedPost
}

const List = async (ids: number[], sort: Sort = "asc", limit: number = 15, offset: number = 0,) => {
    if (isNaN(limit)) limit = 15
    if (isNaN(offset)) offset = 0

    const posts = await Post.findAndCountAll({
        where: {
            id: ids.length ? { [Op.in]: ids } : { [Op.notIn]: [] }
        },
        order: [
            ["createdAt", sort]
        ],
        limit,
        offset
    })

    return [posts.rows, posts.count] as [PostModel[], number]
}

export default {
    Create,
    List,
}