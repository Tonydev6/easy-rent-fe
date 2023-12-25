import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const menuLinks: Array<string> = ["Home", "Vehicule", "About Us", "Contact"];
const menuLinksMobile: Array<string> = [
  "Home",
  "Vehicule",
  "About Us",
  "Contact",
  "Log in",
  "Register",
];
export const Navbar = () => {
  const [value, setValue] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);
  const Navigate = useNavigate();
  const theme = useTheme();
  const mobile: any = useMediaQuery(theme.breakpoints.down("md"));
  const goTo = (page: string) => {
    Navigate(`/${page}`);
  };

  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            EasyRent
          </Typography>
          {mobile ? (
            <>
              <IconButton onClick={() => setShowDrawer(!showDrawer)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={showDrawer}
                onClose={() => setShowDrawer(!showDrawer)}
              >
                <List>
                  {menuLinksMobile.map((link) => {
                    return (
                      <ListItem
                        key={link}
                        onClick={() => {
                          goTo(link);
                          setShowDrawer(!showDrawer);
                        }}
                      >
                        <ListItemText primary={link} />
                      </ListItem>
                    );
                  })}
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <Tabs
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {menuLinks.map((link: string) => {
                  return <Tab label={link} onClick={() => goTo(link)} />;
                })}
              </Tabs>
              <Box sx={{ "& button": { m: 1 } }}>
                <Button variant="text">Log in</Button>
                <Button variant="contained">Register</Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
