import express from "express"
import { validationResult } from "express-validator"
import { PostAddModel } from "../models/post"
import postService from "../services/post.services"
import { Sort } from "../utils/sorts"

const postList = async (req: express.Request, res: express.Response) => {
    let sort = req.query.sort
    let limit = req.query.limit ? parseInt(req.query.limit.toString()) : undefined
    let offset = req.query.offset ? parseInt(req.query.offset.toString()) : undefined
    let ids = req.query.ids ? req.query.ids.toString()
        .split(",")
        .map(id => parseInt(id))
        .filter(id => !isNaN(id)) 
        : []
    if (!(sort && ["asc", "desc"].includes(sort.toString().toLocaleLowerCase()))) {
        sort = "desc"
    }

    const [posts, count] = await postService.List(ids, sort as Sort|undefined, limit, offset)

    res.json({
        posts: posts.map(post => post.toJSON()),
        count,
        sort
    })
}

const postCreate = async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, text }: PostAddModel = req.body

    const [upsertedPost, status] = await postService.Create({
        username: username,
        text: text
    })

    res.json({
        upsertedStatus: upsertedPost?.toJSON(),
        status
    })
}

export default {
    postList,
    postCreate,
}