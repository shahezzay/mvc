import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productsRouter from "./routes/product.js";
import {connectDB} from "./utils/DB.js";
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const app = express();

connectDB()

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);

app.listen(5050, ()=>{
    console.log("server is running on PORT 5050");
});

