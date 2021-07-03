import express from "express"
import parserServices from "../services/parser.services"

const parseSpecifiedFormatCall = async (req: express.Request, res: express.Response) => {
    let value = ""

    if (req.method === "GET") {
        value = req.query.value as string
    } else {
        value = req.body.value as string
    }

    if (!value) {
        res.status(400).json({
            error: "invalid value"
        })
    }

    const result = await parserServices.ParseSpecifiedFormatCall(value)

    res.status(result.error ? 500 : 200).json(result)
}

export default {
    parseSpecifiedFormatCall
}