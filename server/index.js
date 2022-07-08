import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import logger from "./middleware/logger.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import path from "path"
const __dirname = path.resolve()


const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(logger);
app.use(cors());
app.use(express.static(path.join(__dirname, "build") ))
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);
app.use("/*", (req, res)=>{
  return res.sendFile(__dirname, "build/index.html")
})

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
