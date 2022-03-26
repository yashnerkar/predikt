import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Row, Col, Form } from 'react-bootstrap';

const Register = () => {
    return (
        <>
            <div style={{
                width: "100vw", overflowX: "hidden"
                , background: "linear-gradient(90deg, rgba(133, 178, 249, 0.5) 0%, rgba(175, 203, 249, 0) 100%) ", height: "100vh", width: "100vw", paddingBottom: "0.5rem"
            }}>
                <AppBar position="static" sx={{ backgroundColor: "transparent", color: "black", boxShadow: "none", paddingX: "2rem" }}>
                    <Toolbar disableGutters>
                        <Box
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                        >
                            <img
                                className="mt-1"
                                src="images/logo.png"
                                height="60"
                                width="60"
                                alt="logo"
                            />{" "}
                            &nbsp; &nbsp;
                            <strong
                                className="mt-3"
                                style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.4rem" }}
                            >
                                Predikt
                            </strong>
                        </Box>
                        <Box
                            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
                        >
                            <p className="mt-3" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }}>Already have an Account? </p>
                            &nbsp; &nbsp;
                            <div className="mt-1">
                                <Link to="/Home" style={{ textDecoration: "none" }}>
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
                                        }}
                                    >
                                        Sign In
                                    </Button>
                                </Link>
                            </div>
                        </Box>
                    </Toolbar>
                </AppBar>
                <div className="d-flex m-5 justify-content-center">
                    <Form style={{ width: "50rem" }}>
                        <Col>
                            <Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }}>Name</Form.Label>
                                    <Form.Control size="lg" type="email" placeholder="Enter your name" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" size="lg">
                                    <Form.Label style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }}>Email address</Form.Label>
                                    <Form.Control size="lg" type="email" placeholder="mavericks@email.com" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }}>Password</Form.Label>
                                    <Form.Control size="lg" type="password" placeholder="Enter your Password" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} />
                                </Form.Group>
                            </Row>
                        </Col>
                        <div className="mt-1 text-center">
                            <Link to="/Dashboard" style={{ textDecoration: "none" }}>
                                <Button
                                    type="submit"
                                    // fullWidth
                                    // style={{bgcolor}}
                                    variant="contained"
                                    style={{
                                        borderRadius: "50px",
                                        minWidth: "100px",
                                        minHeight: "40px",
                                        backgroundColor: "#407BFF",
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: "1rem",
                                        color: "white"
                                    }}
                                >
                                    Login
                                </Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Register