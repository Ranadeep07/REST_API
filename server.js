const routes = require('./routes/api')
const express = require('express');
const app = express();
const port  = 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/API', {useNewUrlParser: true,useUnifiedTopology: true})
                .then(()=>console.log("Connected to DB..."))
                .catch((e)=>console.log("Error occured",e))

app.use(express.json())
// app.use()

app.use('/api',routes)

app.listen(port,()=>console.log(`App started on port ${port}`))