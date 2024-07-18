import React from "react";
import image1 from "../assets/image1.png";
import SignupForm from "../components/SignupForm";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import NavBar from "../components/NavBar";
import theme from "../components/Theme";

const SignupPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("custom"));
  return (
    <ThemeProvider theme={theme}>
      <div style={{ flexGrow: 1 }}>
        {isMobile && <NavBar />}
        <Grid container spacing={2}>
          <Grid item xs={12} custom={6}>
            <Container
              sx={{
                width: "90%",
                height: "auto",
                position: "relative",
                overflow: "hidden",
                padding: "20px",
              }}
            >
              <img
                src={image1}
                alt="signup img"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "16px",
                  objectFit: "contain",
                }}
              />
            </Container>
          </Grid>
          <Grid item xs={12} custom={6}>
            <SignupForm />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default SignupPage;
