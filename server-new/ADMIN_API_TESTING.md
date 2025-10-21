# Admin Authentication API - Testing Guide

## Setup Instructions

### 1. Configure Database
Edit `.env` file and update the `DATABASE_URL`:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/aureus_db?schema=public"
```

Replace `username`, `password`, and `aureus_db` with your PostgreSQL credentials.

### 2. Run Database Migration
```bash
cd server-new
npm run prisma:migrate
```

This will create the `users` and `admins` tables in your PostgreSQL database.

### 3. Start the Server
```bash
npm run dev
```

Server will run on `http://localhost:5000`

---

## API Endpoints

### 1. Admin Registration (POST)
**Endpoint:** `http://localhost:5000/Admin/Admin-reg`

**Method:** POST

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "adminEmail": "admin@aureus.com",
  "adminPassword": "SecurePassword123"
}
```

**Success Response (201):**
```json
{
  "message": "Admin registered successfully"
}
```

**Error Response (400):**
```json
{
  "message": "Admin already exists"
}
```

---

### 2. Admin Login (POST)
**Endpoint:** `http://localhost:5000/Admin/Admin-login`

**Method:** POST

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "adminEmail": "admin@aureus.com",
  "adminPassword": "SecurePassword123"
}
```

**Success Response (200):**
```json
{
  "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "Id": "550e8400-e29b-41d4-a716-446655440000"
}
```

**Error Responses:**
- 404: Admin not found
- 401: Incorrect password

---

### 3. Admin Dashboard (GET) - Protected
**Endpoint:** `http://localhost:5000/Admin/dashboard`

**Method:** GET

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN_HERE
```

**Success Response (200):**
```json
{
  "message": "Welcome to Admin Dashboard",
  "admin": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "admin@aureus.com"
  },
  "statistics": {
    "totalUsers": 0,
    "totalAdmins": 1
  }
}
```

**Error Response (401):**
```json
{
  "message": "No token provided, authorization denied"
}
```

---

### 4. Get All Users (GET) - Protected
**Endpoint:** `http://localhost:5000/Admin/users`

**Method:** GET

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN_HERE
```

**Query Parameters (Optional):**
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

**Example:** `http://localhost:5000/Admin/users?page=1&limit=20`

**Success Response (200):**
```json
{
  "message": "Users retrieved successfully",
  "users": [
    {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "createdAt": "2024-10-20T10:30:00.000Z",
      "updatedAt": "2024-10-20T10:30:00.000Z"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 1,
    "totalUsers": 1,
    "limit": 10
  }
}
```

---

## Testing Steps with Postman

### Step 1: Register an Admin
1. Open Postman
2. Create a new POST request to `http://localhost:5000/Admin/Admin-reg`
3. Set Headers: `Content-Type: application/json`
4. Set Body (raw JSON):
```json
{
  "adminEmail": "admin@aureus.com",
  "adminPassword": "SecurePassword123"
}
```
5. Click Send
6. You should receive: `"message": "Admin registered successfully"`

### Step 2: Login as Admin
1. Create a new POST request to `http://localhost:5000/Admin/Admin-login`
2. Use the same credentials from Step 1
3. Click Send
4. **Copy the JWT token** from the response

### Step 3: Access Protected Routes
1. Create a new GET request to `http://localhost:5000/Admin/dashboard`
2. Go to Headers tab
3. Add header: `Authorization: Bearer YOUR_TOKEN_HERE`
4. Click Send
5. You should see admin dashboard data

### Step 4: Get All Users
1. Create a new GET request to `http://localhost:5000/Admin/users`
2. Add the same Authorization header
3. Click Send
4. You should see paginated user list

---

## Important Notes

1. **Environment Variables:** Make sure all required variables are set in `.env`:
   - `DATABASE_URL` - PostgreSQL connection string
   - `SECRET_KEY` - JWT secret key
   - `PASSWORD_SECRET` - Password encryption key
   - `PORT` - Server port (default: 5000)

2. **Token Expiration:** JWT tokens expire after 10 days

3. **Password Security:** Passwords are encrypted using AES encryption before storing

4. **Protected Routes:** All routes except `/Admin-reg` and `/Admin-login` require JWT authentication

5. **Pagination:** The `/Admin/users` endpoint supports pagination via query parameters

---

## Troubleshooting

### Database Connection Error
- Check if PostgreSQL is running
- Verify `DATABASE_URL` in `.env` file
- Make sure the database exists

### Token Issues
- Make sure you're using `Bearer TOKEN` format (with space)
- Check if token has expired
- Verify `SECRET_KEY` matches between registration and login

### Prisma Client Not Found
Run: `npm run prisma:generate`

---

## Next Steps (Phase 2)

After Phase 1 is working:
- User Authentication (login, signup)
- User Profile Management
- Financial Data Management
- Transactions & Analytics
