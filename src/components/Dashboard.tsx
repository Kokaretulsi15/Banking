import React from "react";
import NavBar from "../components/NavBar";

const Dashboard: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-4">{/* More dashboard content here */}</div>
    </>
  );
};

export default Dashboard;
