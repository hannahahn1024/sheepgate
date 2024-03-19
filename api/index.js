const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);
const secret = 'sdkaujasiudghaosjghalskdghaslkdgh';

app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());
// console.log(import.meta.env.VITE_MONGO);

mongoose.connect('mongodb+srv://sheepgate:lOcIIOREXLdFZwpi@cluster0.wqhwdmr.mongodb.net/');

app.post('/register', async (req, res) => {
    const {username,password} = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password,salt),
        });
        res.json(userDoc);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
});

app.post('/login', async (req, res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({
        username,
    });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    // res.json(passOk);
    if(passOk){
        jwt.sign({username, id:userDoc._id}, secret, {}, (err,token) => {
            if (err) throw err;
            res.cookie('token', token).json('ok');
            // res.json(token);
        });
    }
    else{
        res.status(400).json('wrong credentials');
    }
});

app.listen(4000);