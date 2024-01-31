import "dotenv/config";
import  express  from "express";
import path from "path";
import cors from "cors";
import pool from "./config/Db.js";
import router from "./router/index.routes.js"


const {LOCAL_PORT} = process.env;

const app = express();

app.use (express.json());

// pool.getConnection().then((connection)=>{
//     console.log("connected to Db")
//     connection.release()
// })
app.use("/api/v1",router)

app.listen(LOCAL_PORT,()=> console.log(`the server is runnig on http://localhost:${LOCAL_PORT}`));

