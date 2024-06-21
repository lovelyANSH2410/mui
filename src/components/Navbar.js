import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import BugReportIcon from "@mui/icons-material/BugReport";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import RightBarModal from "./Modal/RightBarModal";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "30px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showRightBar, setShowRightBar] = useState(false);

  const toggleRightBar = () => {
    setShowRightBar(!showRightBar);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          OPTIMUS
        </Typography>
        <BugReportIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase color={"text.primary"} placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Remy Sharp"
            src="https://avatars.githubusercontent.com/u/110022447?v=4"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Remy Sharp"
            src="https://avatars.githubusercontent.com/u/110022447?v=4"
          />
          <Typography>Ansh</Typography>
        </UserBox>
        <IconButton onClick={toggleRightBar} sx={{ display: { xs: "block", sm: "block", md:"none" } }}>
          <MenuIcon />
          <RightBarModal
            showRightBar={showRightBar}
            setShowRightBar={setShowRightBar}
          />
        </IconButton>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
