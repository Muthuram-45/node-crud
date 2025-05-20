import express from 'express'

const router = express.Router()

// Crud

router.get('/',(req,res) =>{
  res.send("get method");
});

router.post('/',()=>{
  res.send("get method");
});

router.put('/:id',()=>{
  res.send("get method");
});

router.delete('/:id',()=>{
  res.send("get method");
});

export default router;