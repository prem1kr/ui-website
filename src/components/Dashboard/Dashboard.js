import React from "react";
import { useNavigate } from "react-router-dom";
import { getRole, removeToken } from "../utils/authUtils";

const Dashboard = () => {
  const navigate = useNavigate();
  const role = getRole();

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <div>
      <h2>{role === "admin" ? "Admin Dashboard" : "User Dashboard"}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
