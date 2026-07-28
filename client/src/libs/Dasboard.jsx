import React from "react";
import Auth from "../store/AuthStore";
import AdminDashboard from "../Pages/Admin/Dashboard";
import UserDashboard from "../Pages/User/Dashboard";

const Dasboard = () => {
  const { isAdmin } = Auth();

  if (isAdmin == "admin") {
    return <AdminDashboard />;
  } 
  else if (isAdmin == "user") {
    return <UserDashboard />;
  }
  else{
    return (<h1>Login Failed</h1>)
  }
};

export default Dasboard;
