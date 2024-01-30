const express = require('express');
require('./db/connect.js')
const app=express();
const PORT=process.env.PORT || 5000;
require('dotenv').config()



app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})