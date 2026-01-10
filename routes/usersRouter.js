const express = require('express');
const userModel = require('../models/user-model')
const router = express.Router();
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.get('/', (req, res) => {
    res.send('hyy users');
});

router.post('/register',  (req, res) => {
    try {
        let { email, fullname, password } = req.body;
        bycrypt.genSalt(10,  (err, salt) => {
            bycrypt.hash(password, salt,async (err, hash) => {
                if (err) {
                    res.send(err.message);
                } else {
                    let user = await userModel.create({
                        email,
                        fullname,
                        password : hash
                    })
                    let token = jwt.sign({email,id:user._id,},'heyheyheyhey');
                    res.cookie('token',token);
                    res.send('user created successfully');
                }
            });
        })

        
    } catch (err) {
        res.send(err.message);

    }
});

module.exports = router;