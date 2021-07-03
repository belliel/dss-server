"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./models/index"));
const cors_1 = __importDefault(require("cors"));
const posts_routes_1 = __importDefault(require("./routes/posts.routes"));
const parsers_routes_1 = __importDefault(require("./routes/parsers.routes"));
process.env.NODE_ENV = "development";
const corsOptions = {
    origin: "*"
};
index_1.default.createDatabaseIfNotExists().then(() => {
    index_1.default.sequelize.sync(process.env.NODE_ENV === "development" ? { force: true }
        : undefined).then(() => console.log(`db dropped and synced`));
});
const app = express_1.default();
app.use(cors_1.default(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(posts_routes_1.default, parsers_routes_1.default);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`));
//# sourceMappingURL=index.js.map