import { Title } from "@mui/icons-material";
import { Box, Button, Typography, styled } from "@mui/material";
import Container from "@mui/material/Container";
import car from "../../media/car.png";
import React from "react";
export const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Title variant="h1">Find, Book and rent a car Easily</Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Get a car wherever and whenever you need it
            </Typography>

            <Button color="secondary" variant="contained">
              Book
            </Button>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={car}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};
