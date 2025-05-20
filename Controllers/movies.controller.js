import Movie from "../Models/movie.model.js";

// Get Method controller
export const MovieIndex = async(req,res) =>{

  try {
   const movies = await Movie.find();
   res.json(movies);
  } catch (error) {
    res.status(500).json({message : error.message});
  }

};

// Post Method controller
export const MovieCreate =  async (req,res) =>{


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

};

// find the id
export const MovieDetails = async(req,res)=>{
try {
    const movie = await Movie.findById(req.params.id)

    if(movie == null){
        return res.status(404).json({message : "can't find the movie"})
    }
    else{
        res.json(movie);
    }
 } catch (error) {
    return res.status(500).json({message : error.message})
 }
}

// Put Method controller
export const MovieUpdate =  async (req,res) =>{
 
    try {
        
        const result = await Movie.findByIdAndUpdate(
            { _id: req.params.id},

            { title : req.body.title,
              desc : req.body.desc
            },

            {
                new: true,
            }

        );

        res.status(200).json(result);

    } catch (error) {
        
        res.status(400).json({message: error.message});
    }
};


// Delete Method controller
export const Moviedelete =  (req,res) =>{
  res.send("get method");
};
