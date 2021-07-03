import express from "express"
import db from "./models/index"
import cors from "cors"
import postsRouter from "./routes/posts.routes"
import parsersRouter from "./routes/parsers.routes"

process.env.NODE_ENV = "development"

const corsOptions = {
    origin: "*"
}

db.createDatabaseIfNotExists().then(() => {
    db.sequelize.sync(
        process.env.NODE_ENV === "development" ? { force: true }
        : undefined
    ).then(() => console.log(`db dropped and synced`))
}) 


const app = express()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(postsRouter, parsersRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`))
