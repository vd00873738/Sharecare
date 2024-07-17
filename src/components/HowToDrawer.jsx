import React, { Fragment, useState } from "react";
import {
  Drawer,
  Typography,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  border: "1px solid rgba(0, 191, 165, 0.5)",
  "&:hover": { backgroundColor: "#a6f3e8" },
  color: "#444",
  fontWeight: 500,
  textTransform: "none",
  fontSize: "1rem",
});

const secondaryText1 = (
  <Fragment>
    Tell us about your lifestyle and <br /> health
  </Fragment>
);
const secondaryText2 = (
  <Fragment>
    Receive Sharecare
    <br />
    personalized health experience
  </Fragment>
);
const HowToDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <StyledButton onClick={handleOpen} variant="outlined">
        How it works
      </StyledButton>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Container sx={{ display: "flex", flexDirection: "column" }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "#006658",
              fontSize: "1.2rem",
            }}
          >
            Close
          </IconButton>
          <Box sx={{ padding: "20px" }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontSize: "1rem",
                textTransform: "uppercase",
                color: "rgb(147, 153, 158);",
                fontFamily: "Tiempos Headline Regular",
                marginTop: "5rem",
                marginBottom: "1rem",
              }}
            >
              HOW IT WORKS
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "Tiempos Headline Regular",
                fontSize: "3rem",
                lineHeight: 1.19,
                color: "#006658",
                textAlign: "left",
                fontWeight: "400",
                marginBottom: "2rem",
              }}
            >
              Joining is simple{" "}
            </Typography>
            <Typography
              variant="body"
              gutterBottom
              sx={{
                fontFamily: "Tiempos Headline Regular",
                fontSize: "1rem",
                lineHeight: 1.19,
                color: "#363434",
                textAlign: "left",
                marginBottom: "2rem",
              }}
            >
              {" "}
              Joining is simple By simply registering and answering a few
              questions,
              <br />
              you’ll unlock personalized health experience to start your <br />
              health journey.
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="STEP 1"
                  secondary="Register an account"
                  primaryTypographyProps={{
                    style: {
                      fontFamily: "Tiempos Headline Regular",
                      fontSize: "1.5rem",
                      backgroundColor: "#a6f3e8",
                      color: "rgb(0, 102, 88)",
                      borderRadius: "3rem",
                      padding: "0.5rem 4rem",
                      textAlign: "center",
                      maxWidth: "5rem",
                    },
                  }}
                  secondaryTypographyProps={{
                    style: {
                      fontFamily: "Tiempos Headline Regular",
                      fontSize: "2rem",
                      lineHeight: 1.19,
                      color: "#006658",
                      textAlign: "left",
                      fontWeight: "400",
                      marginTop: "1rem",
                      marginBottom: "2rem",
                    },
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="STEP 2"
                  secondary={secondaryText1}
                  primaryTypographyProps={{
                    style: {
                      fontFamily: "Tiempos Headline Regular",
                      fontSize: "1.5rem",
                      backgroundColor: "#a6f3e8",
                      color: "rgb(0, 102, 88)",
                      borderRadius: "3rem",
                      padding: "0.5rem 4rem",
                      textAlign: "center",
                      maxWidth: "5rem",
                    },
                  }}
                  secondaryTypographyProps={{
                    style: {
                      fontFamily: "Tiempos Headline Regular",
                      fontSize: "2rem",
                      lineHeight: 1.19,
                      color: "#006658",
                      textAlign: "left",
                      fontWeight: "400",
                      marginTop: "1rem",
                      marginBottom: "2rem",
                    },
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="STEP 3"
                  secondary={secondaryText2}
                  primaryTypographyProps={{
                    style: {
                      fontFamily: "Tiempos Headline Regular",
                      fontSize: "1.5rem",
                      backgroundColor: "#a6f3e8",
                      color: "rgb(0, 102, 88)",
                      borderRadius: "3rem",
                      padding: "0.5rem 4rem",
                      textAlign: "center",
                      maxWidth: "5rem",
                    },
                  }}
                  secondaryTypographyProps={{
                    style: {
                      fontFamily: "Tiempos Headline Regular",
                      fontSize: "2rem",
                      lineHeight: 1.19,
                      color: "#006658",
                      textAlign: "left",
                      fontWeight: "400",
                      marginTop: "1rem",
                      marginBottom: "2rem",
                    },
                  }}
                />
              </ListItem>{" "}
            </List>
          </Box>
        </Container>
      </Drawer>
    </Box>
  );
};

export default HowToDrawer;
