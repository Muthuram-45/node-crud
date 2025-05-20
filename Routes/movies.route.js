import express from 'express'
import { MovieCreate, Moviedelete, MovieDetails, MovieIndex, MovieUpdate } from '../Controllers/movies.controller.js';

const router = express.Router()

// Crud

router.get('/', MovieIndex);

router.get('/:id',MovieDetails)

router.post('/',MovieCreate);

router.put('/:id',MovieUpdate);

router.delete('/:id',Moviedelete);

export default router;