import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
// import { Row } from "react-bootstrap";

const pages = ["Home","Dashboard","History", "Diagnose"];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    const id = e.currentTarget.id;
    navigate(`/${id}`);          
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", color: "black", boxShadow: "none" }}>
      <Container maxWidth="xl">
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
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleNavigate}
                id={page}
                sx={{
                  my: 2,
                  color: "#1F355F",
                  display: "flex",
                }}
                
              >
                {page} &nbsp;
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
