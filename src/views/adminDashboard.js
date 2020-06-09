import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom'

const AdminDashboard = () => (
    <div className="App">
        <h1>Admin Dashboard</h1>
        <Link to="/" style={{ textDecoration: 'none' }}> Landing Page</Link>
    </div>
)

export default AdminDashboard;