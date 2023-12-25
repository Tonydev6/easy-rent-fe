import { Title } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import image from "../../media/car.png";
export const Hero = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
        <Container>
          <Button>
            <Box sx={{ flex: "1" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#687690",
                  fontWeight: "500",
                  mt: 10,
                  mb: 4,
                }}
              >
                Welcome to Besnik Agency
              </Typography>
              <Title>Discover a place where you'll love to live.</Title>
              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
              >
                Be the first to get the best real estate deals before they hit
                the mass market! Hot foreclosure deals with one simple search!
              </Typography>
            </Box>

            <Box sx={{ flex: "1" }}>
              <img
                src={image}
                alt="heroImg"
                style={{ maxWidth: "100%", marginBottom: "2rem" }}
              />
            </Box>
          </Button>
        </Container>
      </Box>
    </>
  );
};
