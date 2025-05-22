import express from "express";
import movieRoutes from  "./Routes/movies.route.js"
import connectDB from "./lib/db.js";

const app = express()
const port = 3000

import cors from "cors";
app.use(cors());


app.get('/', (req, res) => {
  res.json({ msg:"Hello World!" });
})


// Data understanding Middleware
app.use(express.json());
app.use(express.urlencoded({ extended : true}));


// connect DB
connectDB();


// client -middleware - server
app.use('/movies',movieRoutes)


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
})
