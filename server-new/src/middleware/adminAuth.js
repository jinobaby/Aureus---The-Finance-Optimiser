var JWT = require('jsonwebtoken');
var prisma = require('../config/prisma');

async function adminAuth(req, res, next) {
    try {
        // Get token from header
        var token = req.headers.authorization;

        if (!token || !token.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'No token provided, authorization denied' });
        }

        // Remove 'Bearer ' prefix
        token = token.slice(7);

        // Verify token
        var decoded = JWT.verify(token, process.env.SECRET_KEY);

        // Check if admin exists
        var admin = await prisma.admin.findUnique({
            where: { id: decoded.id }
        });

        if (!admin) {
            return res.status(401).json({ message: 'Admin not found, authorization denied' });
        }

        // Attach admin info to request
        req.admin = {
            id: admin.id,
            email: admin.adminEmail
        };

        next();
    } catch (error) {
        console.error('Admin auth middleware error:', error);

        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }

        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired' });
        }

        res.status(500).json({ message: 'Server error in authentication' });
    }
}

module.exports = adminAuth;
