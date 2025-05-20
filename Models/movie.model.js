import { model, Schema } from "mongoose";


// create your schema(table)
const schema = new Schema({
    title: String,
    desc: String,
})

// create your model(DB)
const Movie = model("Movie",schema)

export default Movie;