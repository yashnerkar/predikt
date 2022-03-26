import { Translate } from "@mui/icons-material";
import { textAlign } from "@mui/system";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Navbar from "../components/navbar/Navbar";
import Table from "../components/Table";
import Button from "@mui/material/Button";
// import RecommendedJobCard from "./RecommendedJobCard";
// import Searchbar from "./Searchbar";

const History = () => {
  return (
    <div style={{ width: "95vw", textAlign: "center", overflowX: "hidden"
     ,background: "linear-gradient(90deg, rgba(133, 178, 249, 0.5) 0%, rgba(175, 203, 249, 0) 100%) ",height: "100vh"}}>
      <Navbar />
      <div className="d-flex justify-content-center text-center">
        <p style={{ fontSize: "3rem", fontWeight: "bolder" }}>Patients History</p>
      </div>
      <div className="mt-3" style={{margin: "3rem"}}>
        <div className="">
          <Table />
        </div>
      </div> 
    </div>
  );
};

export default History;
