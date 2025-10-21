var router = require('express').Router();
var crypto = require('crypto-js');
var prisma = require('../config/prisma');
var JWT = require('jsonwebtoken');
var adminAuth = require('../middleware/adminAuth');

router.post('/Admin-reg', async (req, res) => {
    console.log("Admin registration request received:", req.body);
    try {
        // Check if admin already exists
        var existingAdmin = await prisma.admin.findUnique({
            where: { adminEmail: req.body.adminEmail }
        });

        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        var AdminPassword = crypto.AES.encrypt(
            req.body.adminPassword, process.env.PASSWORD_SECRET
        ).toString();

        var newAdmin = await prisma.admin.create({
            data: {
                adminEmail: req.body.adminEmail,
                adminPassword: AdminPassword
            }
        });

        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        console.error('Error during admin registration:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/Admin-login', async (req, res) => {
    console.log("Admin login request received:", req.body);
    try {
        var findedEmailData = await prisma.admin.findUnique({
            where: { adminEmail: req.body.adminEmail }
        });

        if (!findedEmailData) {
            return res.status(404).json({ message: 'Admin not found' });
        } else {
            console.log("Admin found:", findedEmailData);

            var bytes = crypto.AES.decrypt(
                findedEmailData.adminPassword, process.env.PASSWORD_SECRET
            );
            var realPassword = bytes.toString(crypto.enc.Utf8);
            console.log("Decrypted password:", realPassword);

            if (req.body.adminPassword === realPassword) {
                var token = JWT.sign(
                    { id: findedEmailData.id },
                    process.env.SECRET_KEY,
                    { expiresIn: '10d' }
                );
                console.log("Token generated:", token);

                res.status(200).json({ Token: token, Id: findedEmailData.id });
            } else {
                res.status(401).json({ message: 'Incorrect password' });
            }
        }
    } catch (error) {
        console.log("Error during admin login:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Protected Routes - Require Admin Authentication

// GET /Admin/dashboard - Admin Dashboard
router.get('/dashboard', adminAuth, async (req, res) => {
    try {
        // Get admin info from middleware
        var adminInfo = {
            id: req.admin.id,
            email: req.admin.email
        };

        // Get statistics for dashboard
        var totalUsers = await prisma.user.count();
        var totalAdmins = await prisma.admin.count();

        res.status(200).json({
            message: 'Welcome to Admin Dashboard',
            admin: adminInfo,
            statistics: {
                totalUsers,
                totalAdmins
            }
        });
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET /Admin/users - Manage Users (Get all users)
router.get('/users', adminAuth, async (req, res) => {
    try {
        // Get all users with pagination support
        var page = parseInt(req.query.page) || 1;
        var limit = parseInt(req.query.limit) || 10;
        var skip = (page - 1) * limit;

        var users = await prisma.user.findMany({
            skip: skip,
            take: limit,
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                createdAt: true,
                updatedAt: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        var totalUsers = await prisma.user.count();
        var totalPages = Math.ceil(totalUsers / limit);

        res.status(200).json({
            message: 'Users retrieved successfully',
            users,
            pagination: {
                currentPage: page,
                totalPages,
                totalUsers,
                limit
            }
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
