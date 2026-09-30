import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import prouctRouter from "./routes/product.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5050, ()=>{
    console.log("server is running on PORT 5050");
});

