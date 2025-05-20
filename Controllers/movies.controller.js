import Movie from "../Models/movie.model.js";

// Get Method controller
export const MovieIndex = (req,res) =>{
  res.send("get method");
};

// Post Method controller
export const MovieCreate =  async (req,res) =>{

    console.log(req.body);

    const newMovie = new Movie({
         
        title : req.body.title,
        desc : req.body.desc,
    })

   try {

     const movie = await newMovie.save();
     return res.status(201).json(movie);

   } catch (error) {

      return res.status(400).json({message: error.message})
   }

    return res.json(req.body);
};


// Put Method controller
export const MovieUpdate =  (req,res) =>{
  res.send("get method");
};


// Delete Method controller
export const Moviedelete =  (req,res) =>{
  res.send("get method");
};
