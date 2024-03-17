const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());
// console.log(import.meta.env.VITE_MONGO);

mongoose.connect('mongodb+srv://sheepgate:lOcIIOREXLdFZwpi@cluster0.wqhwdmr.mongodb.net/');

app.post('/register', async (req, res) => {
    const {username,password} = req.body;
    try{
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

app.listen(4000);