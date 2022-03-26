import React from "react";
import { Container, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import HomePageNavbar from "../components/navbar/HomepageNavbar";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div style={{
        width: "100vw", textAlign: "center", overflowX: "hidden"
        , background: "linear-gradient(90deg, rgba(133, 178, 249, 0.5) 0%, rgba(175, 203, 249, 0) 100%) ", height: "100vh", paddingBottom: "0.5rem"
      }}>
        <HomePageNavbar />
        <div className="d-flex m-5 justify-content-center">
          <Row>
            <Col>
              <img src="images/homePageLogo.png" alt="logo" height="450rem" />
            </Col>
            <Col>
              <p className="mb-3" style={{ fontFamily: "Poppins, sans-serif", fontSize: "2rem" }}><strong>Welcome to Predikt</strong></p>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }}>Email address</Form.Label>
                  <Form.Control type="email" placeholder="mavericks@email.com" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem" }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }}>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your Password" style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem" }} />
                </Form.Group>
                <div className="mt-1">
                  <Link to="/Dashboard">
                    <Button
                      type="submit"
                      // fullWidth
                      // style={{bgcolor}}
                      variant="contained"
                      style={{
                        borderRadius: "50px",
                        maxWidth: "100px",
                        maxHeight: "40px",
                        minWidth: "100px",
                        minHeight: "40px",
                        backgroundColor: "#407BFF",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "0.9rem",
                        color: "white"
                      }}
                    >
                      Login
                    </Button>
                  </Link>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
        <p className="mb-3" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.8rem" }}><strong>Features</strong></p>
        <Row>
          <Col>
            <div style={{
              backgroundColor: "#407bff40",
              borderRadius: "40px",
              padding: "2rem",
              margin: "2rem"
            }}>
              <Col>
                <img src="images/Easy.png" alt="logo" height="100rem" width="100rem" />
                <p><strong>Easy to Use</strong></p>
              </Col>
            </div>
          </Col>
          <Col>
            <div style={{
              backgroundColor: "#407bff40",
              borderRadius: "40px",
              padding: "2rem",
              margin: "2rem"
            }}>
              <Col>
                <img src="images/Clock.png" alt="logo" height="100rem" width="100rem" />
                <p><strong>Fast</strong></p>
              </Col>
            </div>
          </Col>
          <Col>
            <div style={{
              backgroundColor: "#407bff40",
              borderRadius: "40px",
              padding: "2rem",
              margin: "2rem"
            }}>
              <Col>
                <img src="images/Trust.png" alt="logo" height="100rem" width="100rem" />
                <p><strong>Reliabe</strong></p>
              </Col>
            </div>
          </Col>
        </Row>
        <Link to="/Register">
          <Button
            type="submit"
            // fullWidth
            // style={{bgcolor}}
            variant="contained"
            style={{
              borderRadius: "50px",
              backgroundColor: "#407BFF",
              fontFamily: "Poppins, sans-serif",
              fontSize: "1rem",
              color: "white",
              padding: "0.8rem"
            }}
          >
            Sign Up Now !
          </Button>
        </Link>
        {/* Footer */}
        <div className="d-flex justify-content-center mt-2 align-items-center mr-0">
          <Col>
            <img src="images/FooterLogo.png" alt="footer" height="150rem" />
            <p className="text-center" style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "0.8rem",
              color: "#215EE9",
              opacity: "0.5",
            }}><strong>© Predikt™, 2022. All rights reserved.</strong></p>
          </Col>
        </div>
      </div >

    </>
  );
};

export default Home;
