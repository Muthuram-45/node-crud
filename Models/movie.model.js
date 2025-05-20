import { model, Schema, Types } from "mongoose";


// create your schema(column)
const schema = new Schema({
    title: {
        type : String,
        required : true,
        unique : true,
    },
    desc: {
        type : String,
        required : true,
    },
})

// create your model(table)
const Movie = model("Movie",schema)

export default Movie;