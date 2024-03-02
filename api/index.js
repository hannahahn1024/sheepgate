const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User')

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://sheepgate:${import.meta.env.VITE_MONGO}@cluster0.wqhwdmr.mongodb.net/');

app.post('/register', (req, res) => {
    const {username,password} = req.body;
    res.json({requestData:{username,password}});

});

app.listen(4000);