import express from "express";
import database from "./config/database/connection.js";
import cors from "cors";
// import path from "path";

const app = express();
const port = 8888;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () =>{
console.log('server is running on 8888')
});