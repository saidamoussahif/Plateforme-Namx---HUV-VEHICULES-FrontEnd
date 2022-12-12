import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const MainDash = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isset = (token) => {
    if (!token) {
      navigate("/login");
    }
  };

  useEffect(() => {
    isset(token);
  });

  return (
    <div className="MainDash">
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
