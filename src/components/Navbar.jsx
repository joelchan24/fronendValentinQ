import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Stack,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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

    switch(event.target.textContent){
      case 'Profile':
        navigate('/profile')
        break;
      case 'Micro-Habits':
        navigate('/habits')
        break;
      case 'Community':
        navigate('/community')
        break;
      case 'Logout':
        handleLogout()
        break;
        default:
        setOpen(false)
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 14 }}>
            <Link href="/" color="inherit">
              <img
                src="https://res.cloudinary.com/duavnrhnp/image/upload/v1662220313/micro-habits/Untitled_design_4_nkmzow.png"
                width={160}
                alt=""
              />
            </Link>
          </Typography>
          {!pebblesUser && (
            <>
              <Link href="/signup" color="inherit" sx={{ mr: 4 }}>
                {!pebblesUser && "Signup"}
              </Link>
              <Link href="/login" color="inherit">
                {!pebblesUser && "Login"}
              </Link>
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
                  color="inherit"
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
