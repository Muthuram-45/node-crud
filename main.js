const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({ msg:"Hello World!" });
})


// Crud
app.get('/movies',()=>{

});

app.post('/movies',()=>{

});

app.put('/movies/:id',()=>{

});

app.delete('/movies',()=>{

});


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
})
