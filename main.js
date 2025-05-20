import express from "express";
import movieRoutes from  "./Routes/movies.route.js"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({ msg:"Hello World!" });
})


// client -middleware - server
app.use('/movies',movieRoutes)


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
})
