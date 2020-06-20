const express = require('express');
let app = express();



app.get('*',(req,res,next)=>{
    console.log(req.originalUrl)
    res.send('Hello World');
})

app.listen(3000,()=>{
    console.log('Server Running')
})