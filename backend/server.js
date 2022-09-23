import express from "express";
import mongoose from "mongoose";
import blogRouters from "./routes/Blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/users",router);
app.use("/blogs", blogRouters);

mongoose.connect('mongodb+srv://Omkar:Ganntrade@cluster0.6mqbfja.mongodb.net/Blogs?retryWrites=true&w=majority').then(() => console.log("Connected to db"))

app.listen(5000,(req ,res) =>{
    console.log("Server is active at port 5000");
})