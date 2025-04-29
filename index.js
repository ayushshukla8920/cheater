const express = require('express');
const app = express();

// app.use(express.static(__dirname+'/public'));

app.get('/:filename',(req,res)=>{
    const file = req.params.filename;
    res.sendFile(__dirname+'/public/'+file);
})

app.listen(3000,()=>{
    console.log(`Cheating server running`);
})