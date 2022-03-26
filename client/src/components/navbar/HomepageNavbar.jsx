import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link } from "react-router-dom";


function HomePageNavbar() {
    return (

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
                    <p className="mt-3" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }}>Don't have an Account? </p>
                    &nbsp; &nbsp;
                    <div className="mt-1">
                        <Link to="/Register" style={{textDecoration: "none"}}>
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
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </Box>
            </Toolbar>
        </AppBar>

    );
}

export default HomePageNavbar;

