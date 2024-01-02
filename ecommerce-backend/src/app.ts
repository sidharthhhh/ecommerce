import express from "express";


//importing routes
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";


const port = 4000;

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res)=> {
    res.send(" API Working with /api/v1")
})

// using routes
app.use("/api/v1/user", userRoute)


// app.use()


app.listen(port, ()=> {
    console.log(`server is working oin localhost:${port}`)
})