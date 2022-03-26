// Dashboard Page 
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Navbar from "../components/navbar/Navbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


const Dashboard = () => {
  return (
    <div style={{
      width: "100vw", textAlign: "center", overflowX: "hidden"
      , background: "linear-gradient(90deg, rgba(133, 178, 249, 0.5) 0%, rgba(175, 203, 249, 0) 100%) ", height: "100vh"
    }}>
      <Navbar />
      <div className="d-flex justify-content-center text-center">
        <p style={{ fontSize: "3rem", fontWeight: "bolder" }}>Welcome!</p>
      </div>
      <div className="d-flex justify-content-center">
        <Row>
          <Col
            sx={6}
            className="d-flex flex-column justify-content-center"
            style={{
              margin: "2rem",
              borderRadius: "20px",
              width: "30rem",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              background: "white"
            }}
          >
            <div
              className="mt-4"
              style={{
                borderRadius: "50%",
                height: "200px",
                width: "200px",
                margin: "auto",
                display: "flex",
                position: "relative",
                background: "linear-gradient(to right, #BA68C8, #407BFF)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  height: "50%",
                  width: "50%",
                  margin: "auto",
                  display: "flex",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  transition: "all 0.5 s ease-out",
                  padding: "30%",
                  backgroundColor: "#ffffff",
                }}
              >
                <div
                  style={{
                    borderRadius: "50%",
                    height: "50%",
                    width: "50%",
                    margin: "auto",
                    display: "flex",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    backgroundColor: "#ffffff",
                    boxShadow:
                      " 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                ><h1 style={{ margin: "auto" }}>00</h1>
                </div>
              </div>
            </div>
            <p
              className="text-center"
              style={{
                fontSize: "1.2rem",
                color: "#3E3E3E",
                marginTop: "0.7rem",
              }}
            >
              Test Taken
            </p>
          </Col>
          <Col
            sx={6}
            className="d-flex flex-column justify-content-center"
            style={{
              margin: "2rem",
              borderRadius: "20px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              background: "white"
            }}
          >
            {" "}
            <div
              className="mt-4"
              style={{
                borderRadius: "50%",
                height: "200px",
                width: "200px",
                marginTop: "2rem",
                margin: "auto",
                display: "flex",
                position: "relative",
                background: "linear-gradient(to right, #BA68C8, #407BFF)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  height: "50%",
                  width: "50%",
                  margin: "auto",
                  display: "flex",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  transition: "all 0.5 s ease-out",
                  padding: "30%",
                  backgroundColor: "#ffffff",
                }}
              >
                <div
                  style={{
                    borderRadius: "50%",
                    height: "50%",
                    width: "50%",
                    margin: "auto",
                    display: "flex",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    backgroundColor: "#ffffff",
                    boxShadow:
                      " 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                ><h1 style={{ margin: "auto" }}>00</h1></div>
              </div>
            </div>
            <p
              className="text-center"
              style={{
                fontSize: "1.2rem",
                color: "#3E3E3E",
                marginTop: "0.7rem",
              }}
            >
              Patient Diagnosed
            </p>
          </Col>
          <Col
            sx={6}
            className="d-flex flex-column justify-content-center"
            style={{
              margin: "2rem",
              borderRadius: "20px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              background: "white"
            }}
          >
            {" "}
            <div
              className="mt-4"
              style={{
                borderRadius: "50%",
                height: "200px",
                width: "200px",
                marginTop: "2rem",
                margin: "auto",
                display: "flex",
                position: "relative",
                background: "linear-gradient(to right, #BA68C8, #407BFF)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  height: "50%",
                  width: "50%",
                  margin: "auto",
                  display: "flex",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  transition: "all 0.5 s ease-out",
                  padding: "30%",
                  backgroundColor: "#ffffff",
                }}
              >
                <div
                  style={{
                    borderRadius: "50%",
                    height: "50%",
                    width: "50%",
                    margin: "auto",
                    display: "flex",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    backgroundColor: "#ffffff",
                    boxShadow:
                      " 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                ><h1 style={{ margin: "auto" }}>00</h1></div>
              </div>
            </div>
            <p
              className="text-center"
              style={{
                fontSize: "1.2rem",
                color: "#3E3E3E",
                marginTop: "0.7rem",
              }}
            >
              Report Sent
            </p>
          </Col>
        </Row>
      </div>
      <div className="mt-1">
        <Link to="/Diagnose" style={{textDecoration: "none"}}>
          <Button
            type="submit"
            // fullWidth
            // style={{bgcolor}}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{
              borderRadius: "50px",
              paddingLeft: "5rem",
              paddingRight: "5rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              maxWidth: "100px",
              maxHeight: "40px",
              minWidth: "100px",
              minHeight: "40px",
              backgroundColor: "#407BFF",
            }}
          >
            Diagnose
          </Button>
        </Link>
      </div>
      {/* <div className="border border-dark mt-3">
        <p style={{ fontSize: "2rem" }}>Patients History!</p>
        <div className="border border-dark">
          <Table />
        </div>
      </div> */}
      {/* <footer className="border border-dark">
        <p className="text-center fw-bold">SIH @ DMCE</p>
      </footer> */}
    </div>
  );
};

export default Dashboard;
