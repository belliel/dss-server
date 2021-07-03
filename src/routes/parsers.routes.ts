import express from "express"
import parsersControllers from "../controllers/parsers.controllers"

const parsersRouter = express.Router()

parsersRouter.all(
    "/parsers/specifiedFormatCall",
    parsersControllers.parseSpecifiedFormatCall
)


export default parsersRouter