import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { navItems } from "../Constants";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate,useLocation } from "react-router";
import { useEffect, useState } from "react";

function Logo() {
  const navigate = useNavigate();

  return (
    <Box onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
      <Typography
        variant="h6"
        component="h6"
        className="poppins"
        sx={{ color: "black" }}
      >
        _TKCertFactory
      </Typography>
    </Box>
  );
}

function Navbar() {
  const location = useLocation();
  const [userexists, setuserexists] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setuserexists(true);
    } else {
      setuserexists(false);
    }
  }, [location.pathname]);

  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        <Logo />
        <ClearIcon />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} className="poppins" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  function handleNavigation(){
    if(userexists){

    }else {
      navigate("/signup")
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "white", px: 0 }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: "black", display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Logo />
          <Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  <Typography
                    className="poppins"
                    color="black"
                    sx={{ mx: { md: 2, xs: 0 } }}
                    fontSize={{ md: 15, xs: 12 }}
                    textTransform="capitalize"
                  >
                    {item}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button variant="contained" onClick={handleNavigation}>
              <Typography className="poppins" textTransform="capitalize">
                {userexists ? "Dashboard" : "Sign up"}
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
