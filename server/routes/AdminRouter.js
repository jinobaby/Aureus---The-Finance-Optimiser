var router = require('express').Router();
var crypto = require('crypto-js');
var AdminSchema = require('../models/adminSchema');
var JWT = require('jsonwebtoken');

router.post('/Admin-reg', async (req, res) => {
    console.log("Admin registration request received:", req.body);
    try {
        var AdminPassword = crypto.AES.encrypt(
            req.body.adminPassword, process.env.pasdword
        ).toString();

        var newAdmin = new AdminSchema({
            adminEmail: req.body.adminEmail,
            adminPassword: AdminPassword
        });

        await newAdmin.save();
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        console.error('Error during admin registration:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/Admin-login', async (req, res) => {
    console.log("Admin login request received:", req.body);
    try {
        var findedEmailData = await AdminSchema.findOne({ adminEmail: req.body.adminEmail });
        if (!findedEmailData) {
            return res.status(404).json({ message: 'Admin not found' });
        } else {
            console.log("Admin found:", findedEmailData);

            var bytes = crypto.AES.decrypt(
                findedEmailData.adminPassword, process.env.pasdword
            );
            var realPassword = bytes.toString(crypto.enc.Utf8);
            console.log("Decrypted password:", realPassword);

            if (req.body.adminPassword === realPassword) {
                var token = JWT.sign(
                    { id: findedEmailData._id },
                    process.env.SECRET_KEY,
                    { expiresIn: '10d' }
                );
                console.log("Token generated:", token);

                res.status(200).json({ Token: token, Id: findedEmailData._id });
            } else {
                res.status(401).json({ message: 'Incorrect password' });
            }
        }
    } catch (error) {
        console.log("Error during admin login:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
