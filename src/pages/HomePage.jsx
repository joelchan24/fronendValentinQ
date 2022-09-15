import { CardsHome } from "../components";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Container,
  Typography,
  Box,
  Paper,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const navigate = useNavigate();
  const navigateSignup = () => {
    navigate("/signup");
  };

  return (
    <Container
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        maxWidth={850}
      >
        <Box
          m={1}
          sx={{
            width: "50%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{ typography: { sm: "h2", xs: "h5" } }}
              fontWeight="light"
              color="secondary"
            >
              WELCOME
            </Typography>
            <Typography
              sx={{ typography: { sm: "h2", xs: "h5" } }}
              fontWeight="light"
              color="secondary"
            >
              TO
            </Typography>
            <Typography
              sx={{ typography: { sm: "h2", xs: "h5" } }}
              color="secondary"
            >
              PEBBLES
            </Typography>
          </Box>
        </Box>
        <Box ml={3}>
          <img
            src="https://res.cloudinary.com/duavnrhnp/image/upload/v1663016857/mug_n0ziue.png"
            alt="mug"
            width={210}
          />
        </Box>
      </Box>
      <Box m={2}>
        <Box maxWidth={870}>
          <Typography
            sx={{
              typography: {
                sm: "h4",
                xs: "subtitle2",
              },
            }}
          >
            Pebbles is a self-improvement app that inspires you to pursue new
            habits and share your progress and ideas with other users.
          </Typography>
        </Box>
      </Box>
      <CardsHome />
    </Container>
  );
};

export default HomePage;
