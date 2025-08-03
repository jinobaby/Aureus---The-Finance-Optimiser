import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import AdminLogin from './adminPages/AdminLogin';
import AdminHome from './adminPages/AdminHome';
import AdminPrivate from './components/private/AdminPrivate';
import AdminLayout from './Layout/AdminLayout';
import UserLogin from './userPages/UserLogin';
import UserSignup from './userPages/UserSignup';

function App() {
  return (
    <Routes>
      {/* Admin Public Route */}
      <Route path="/Admin-login" element={<AdminLogin />} />
      {/* User Public Route */}
      <Route path="/User-login" element={<UserLogin />} />
      <Route path="/User-signup" element={<UserSignup />} />

      {/* Admin Private route */}
      <Route element={<AdminPrivate> <AdminLayout /> </AdminPrivate>}>
        <Route element={<AdminHome />} path='/Admin' />
      </Route>

      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
    </Routes>
  )
}

export default App