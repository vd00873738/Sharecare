import React from "react";
import image1 from "../assets/image1.png";
import SignupForm from "../components/SignupForm";
import { Box, Container } from "@mui/material";
const SignupPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "15px",
      }}
    >
      <Container
        sx={{
          width: "80%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* <Image src={image1} alt="signup img" className={`${styles.image}`} /> */}
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
      <Container>
        <SignupForm />
      </Container>
    </Box>
  );
};

export default SignupPage;
