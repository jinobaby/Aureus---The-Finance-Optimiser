import React from 'react'

function AdminHome() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to Aureus Admin Panel!</p>
      
      <div>
        <h2>Quick Stats</h2>
        <ul>
          <li>Total Users: 0</li>
          <li>Active Sessions: 0</li>
          <li>Revenue: $0</li>
        </ul>
      </div>

      <div>
        <h2>Admin Actions</h2>
        <button>Manage Users</button>
        <button>View Reports</button>
        <button>Settings</button>
      </div>

      <div>
        <p>Current URL: {window.location.pathname}</p>
        <p>Status: ✅ Dashboard Loaded</p>
      </div>
    </div>
  )
}

export default AdminHome