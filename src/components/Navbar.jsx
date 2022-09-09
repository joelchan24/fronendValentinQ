import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Stack,
  Link,
} from "@mui/material";

//
export default function Navbar({ pebblesUser, handleLogout }) {
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 10 }}>
            <Link href="/" color="inherit">
              <img
                src="https://res.cloudinary.com/duavnrhnp/image/upload/v1662682533/logo_jfqwxp.png"
                height={35}
                alt="logo"
              />
            </Link>
          </Typography>
          {!pebblesUser && (
            <>
              <Box mr={2}>
                <Button
                  variant="contained"
                  href="/signup"
                  color="secondary"
                  size="small"
                >
                  Signup
                </Button>
              </Box>
              <Box ml={2}>
                <Button
                  variant="contained"
                  href="/login"
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
                            <MenuItem onClick={handleClose}>Community</MenuItem>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
