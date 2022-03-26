import React, { useState } from "react";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Homenavbar from "../home/Navbar";
const Login = () => {
  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginInfo({
      ...loginInfo,
      [name]: value,
    });
  };
  const theme = createTheme();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch("xyz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });
    const result = await data.json();
    console.log(result);
    setloginInfo({
      email: "",
      password: "",
    });
  };
  return (
    // <div style={{ height: "100vh", width: "100vw" }}>
    <div
    >
      {/* <Homenavbar /> */}
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" className=""
        sx={{
          background: "linear-gradient(to right bottom, #F6FAFD, #FFFFFF)",
        }}>
          <CssBaseline />
          <Box
            className="mt-3 py-5"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}> */}
            {/* <LockOutlinedIcon /> */}
            {/* </Avatar> */}
            {/* <Typography component="h1" variant="h5">
              Log in
            </Typography> */}
            <Typography
              component="h1"
              variant="h5"
              style={{
                fontFamily: "Public Sans",
                fontSize: "2.4rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
              }}
            >
              Welcome to Predikt!
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              {/* <label for="my-input" style={{fontSize:"1.3rem"}}>Email address</label> */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              {/* <label for="my-input" style={{fontSize:"1.3rem"}}>Password</label> */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <br></br>
              <Button
                type="submit"
                // fullWidth
                // style={{bgcolor}}
                variant="contained"
                sx={{ mt: 3, mb: 2, bgColor: "success.main" }}
                style={{
                  borderRadius: "50px",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                }}
              >
                Log In
              </Button>
              <br></br>
              <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
              {/* <Grid container style={{textAlign: "center",}}>
                <Grid item xs></Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Login;
