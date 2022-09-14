import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Stack,
  Switch,
} from "@mui/material";

export default function Navbar({ pebblesUser, handleLogout, setIsDark , isDark }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    switch (event.target.textContent) {
      case "Home":
        navigate("/");
        break;
      case "Profile":
        navigate("/profile");
        break;
      case "Micro-Habits":
        navigate("/habits");
        break;
      case "Community":
        navigate("/community");
        break;
      case "Logout":
        handleLogout();
        break;
      default:
        setOpen(false);
    }
    setOpen(false);
  };

  const navigateLogin = () => {
    navigate("/login");
  };
  const navigateSignUp = () => {
    navigate("/signup");
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <Box >
            <Link to={"/"}>
              <img
                src={!isDark ? "https://res.cloudinary.com/duavnrhnp/image/upload/v1663003383/logoAzul_g93lki.png" : "https://res.cloudinary.com/duavnrhnp/image/upload/v1663003383/logoBlanco_iuahoa.png"}
                height={35}
                alt="logo"
              />
            </Link>
          </Box>
          <Box sx={{
            display:'flex',
            alignItems:'center'
          }}>
            {!pebblesUser && (
              <>
                <Box ml={1}>
                  <Button
                    variant="contained"
                    onClick={navigateLogin}
                    color="secondary"
                    size="small"
                  >
                    Login
                  </Button>
                </Box>
              </>
            )}
            <Stack direction="row" spacing={2}>
              {pebblesUser && (
                <div>
                  <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={handleToggle}
                  >
                    Dashboard
                  </Button>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "left top"
                              : "left bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                            >
                              <MenuItem onClick={handleClose}>Home</MenuItem>
                              <MenuItem onClick={handleClose}>Profile</MenuItem>
                              <MenuItem onClick={handleClose}>
                                Micro-Habits
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                Community
                              </MenuItem>
                              <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              )}
            </Stack>
            <Box ml={1}>
              <Switch
                color="secondary"
                onChange={() => setIsDark((prevState) => !prevState)}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
