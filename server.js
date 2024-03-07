const express = require('express');
const studentRoutes = require('./src/student/routes')
const app = express();
const PORT = 3000;

app.use(express.json()); // to parse the incoming requests with JSON payloads

app.get('/', (req,res)=>{
    res.send(`<h1>Hello World!!</h1>`);
})

app.use('/api/v1/students', studentRoutes);

app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`);
})