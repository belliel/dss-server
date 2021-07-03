import { INTEGER } from "sequelize";
import Sequelize from "sequelize";
import { sequelize } from ".";

export interface PostAddModel {
    username: string
    text: string
}

export interface PostModel extends Sequelize.Model<PostModel, PostAddModel> {
    id: number
    username: string
    text: string
    createdAt: string
    updatedAt: string
}

export interface PostViewModel {
    id: number
    username: string
    text: string
}

export const Post = sequelize.define<PostModel, PostAddModel>("post", {
    username: {
        type: Sequelize.TEXT,
    },
    text: {
        type: Sequelize.TEXT
    }
})

