const express=require('express');
const app = express();

const morgan=require('morgan');
const mongoose = require('./DataBase/DB');
const RouterAuth=require('./Routers/RouterAuth');
require('dotenv').config();

app.use(express.json());
app.use(morgan("dev"));
app.use('/api/auth',RouterAuth);

app.listen('4000',()=>{
    console.log('escuchando port 4000')
})