import express from "express";
import dotenv from "dotenv";
import UserRoute from "./routes/user.js"
import {connectDB} from "./utils/DB.js";
import cors from "cors";
import { verifyJWT, signJWT } from "./utils/jwt.js";
import productsRouter from "./routes/product.js";


import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
dotenv.config();

connectDB()

app.use(cors());
app.use(express.json());

app.use("/user", UserRoute);

app.use("/products", productsRouter);

app.listen(5050, ()=>{
    console.log("server is running on PORT 5050");
});

const token = signJWT({
    name:"Ezzah Noor",
    userId: "7845",
    usertype: "admin",
});

console.log(token)

console.log(verifyJWT(token))