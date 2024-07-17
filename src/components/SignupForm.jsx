import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";

import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Container,
  Box,
  Typography,
  Collapse,
  InputAdornment,
  useMediaQuery,
} from "@mui/material";

import { styled } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NavBar from "./NavBar";
import { useTheme } from "@mui/material/styles";

const EmailButton = styled(Button)({
  backgroundColor: "#2B3669",
  "&:hover": { backgroundColor: "#2B3649" },
});

const SignupForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    streetAddress: "",
    city: "",
    state: "",
    mobileNumber: "",
    dateOfBirth: null,
    gender: "",
  });

  const [expanded, setExpanded] = useState(false);
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const termsHandler = () => {
    navigate("/terms");
  };
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.fullName) {
      setError(true);
      setHelperText("Required field");
    } else {
      setError(false);
      setHelperText("");
    }

    if (!formData.streetAddress) {
      setError(true);
      setHelperText("Invalid address. Please select from suggestions.");
    } else {
      setError(false);
      setHelperText("");
    }

    if (!formData.city) {
      setError(true);
      setHelperText("Required field");
    } else {
      setError(false);
      setHelperText("");
    }

    if (!formData.state) {
      setError(true);
      setHelperText("Required field");
    } else {
      setError(false);
      setHelperText("");
    }

    if (!formData.mobileNumber) {
      setError(true);
      setHelperText("Required field");
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      setError(true);
      setHelperText("Mobile number must be 10 dights.");
    } else {
      setError(false);
      setHelperText("");
    }

    if (!formData.dateOfBirth) {
      setError(true);
      setHelperText("Required field");
    } else {
      setError(false);
      setHelperText("");
    }

    if (!formData.gender) {
      setError(true);
      setHelperText("Required field");
    } else {
      setError(false);
      setHelperText("");
    }

    if (!formData.email) {
      setError(true);
      setHelperText("Required field");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setHelperText("Email is not valid.");
    } else {
      setError(false);
      setHelperText("");
    }

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      console.log(formData);
    } else {
      setError(tempErrors);
    }
  };

  return (
    <Container>
      {!isMobile && <NavBar />}
      <Typography
        varient="h4"
        component="h1"
        gutterBottom
        sx={{
          fontFamily: "Tiempos Headline Regular",
          fontSize: "3rem",
          lineHeight: 1.19,
          color: "#006658",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        Sign up
      </Typography>
      <Container>
        <Container sx={{ width: "60%" }}>
          <form onSubmit={handleSubmit}>
            <Container
              sx={{
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                borderRadius: "4px",
              }}
            >
              <Typography
                varient="h4"
                component="h1"
                gutterBottom
                sx={{
                  fontSize: "1.5rem",
                  lineHeight: 1.19,
                  color: "#2B3649",
                  textAlign: "left",
                  borderBottom: "1px solid #bbb",
                  padding: "1rem 0",
                }}
              >
                Your Information
              </Typography>

              <TextField
                label="Full Name"
                variant="standard"
                name="fullName"
                fullWidth
                value={formData.fullName}
                onChange={handleChange}
                error={error}
                helperText={helperText}
                sx={{
                  margin: "0px",
                  width: "100%",
                  backgroundColor: "transparent",
                }}
                // inputProps={{
                //   endAdornment: (
                //     <InputAdornment position="start">
                //       <EditIcon />
                //     </InputAdornment>
                //   ),
                // }}
              />

              <TextField
                label="Street Address (e.g '1 elm way')"
                variant="standard"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                fullWidth
                error={error}
                helperText={helperText}
                sx={{ margin: "0px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  label="City"
                  variant="standard"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  halfWidth
                  error={error}
                  helperText={helperText}
                  sx={{ margin: "0px", borderRight: "1px solid #bbb" }}
                />
                <TextField
                  label="State"
                  variant="standard"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  halfWidth
                  error={error}
                  helperText={helperText}
                  sx={{ margin: "0px" }}
                />
              </Box>
              <TextField
                label="Mobile Number"
                variant="standard"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                fullWidth
                error={error}
                helperText={helperText}
                sx={{ marginTop: "10px" }}
              />
              <TextField
                label="Date of Birth"
                variant="standard"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                fullWidth
                error={error}
                helperText={helperText}
                sx={{ marginTop: "10px" }}
              />

              <FormControl
                fullWidth
                sx={{ marginBottom: "10px", marginTop: "20px" }}
              >
                <InputLabel id="select-gender">Gender</InputLabel>
                <Select
                  labelId="select-gender"
                  variant="standard"
                  id="gender"
                  label="gender"
                  onChange={handleChange}
                  value={formData.gender}
                  error={error}
                  helperText={helperText}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Container>
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={error}
              helperText={helperText}
              sx={{ marginTop: "2rem" }}
            />
            <EmailButton
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                marginTop: "2rem",
                textTransform: "none",
                fontSize: "1.2rem",
              }}
            >
              Continue with email
            </EmailButton>
          </form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              varient="h5"
              component="h1"
              gutterBottom
              sx={{
                fontSize: "1rem",
                lineHeight: 1.19,
                color: "#2B3649",
                textAlign: "center",
                marginTop: "2rem",
                textDecoration: "none",
              }}
            >
              By signing up, I agree to the
              <span style={{ color: "#00BFA5" }}>
                {" "}
                <span onClick={termsHandler} style={{ cursor: "pointer" }}>
                  Offer Terms{" "}
                </span>
                <Button
                  variant="standard"
                  onClick={handleToggle}
                  sx={{ padding: "0px" }}
                >
                  {expanded ? <ExpandLess /> : <ExpandMore />}
                </Button>
                <Collapse in={expanded}>
                  <Typography
                    variant="body1"
                    color="#383434"
                    fontSize="0.8rem"
                    gutterBottom
                    textAlign="center"
                    sx={{ fontFamily: "Tiempos Headline Regular" }}
                  >
                    I agree to the Offer Terms and understand I am creating a
                    Sharecare account. I agree to the Sharecare Privacy Policy,
                    Terms, and, if applicable to me, the Privacy Notice for
                    California Residents. I consent to Sharecare’s processing of
                    any health information I may provide, for the purposes
                    listed in the Privacy Policy. I agree to receive emails,
                    offers, alerts, and other notices. I understand that I can
                    opt-out of marketing communications at any time.
                  </Typography>
                </Collapse>
              </span>
            </Typography>
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export default SignupForm;
