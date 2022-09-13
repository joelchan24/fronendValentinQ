import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const navigate = useNavigate();
  const navigateSignup = () => {
    navigate('/signup')
  }

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
              alignItems: "flex-end",
            }}
          >
            <Typography sx={{typography:{sm: 'h2', xs: 'h5'}}} fontWeight="light" color="secondary">
              WELCOME
            </Typography>
            <Typography sx={{typography:{sm: 'h2', xs: 'h5'}}} fontWeight="light" color="secondary">
              TO
            </Typography>
            <Typography sx={{typography:{sm: 'h2', xs: 'h5'}}} fontWeight="light" color="secondary">
              PEBBLES
            </Typography>
          </Box>
          <Box mt={2}>
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              onClick={navigateSignup}
              sx={{
                borderRadius: 10,
              }}
            >
              signup
            </Button>
          </Box>
        </Box>
        <Box ml={3}>
          <img
            src="https://res.cloudinary.com/duavnrhnp/image/upload/v1663016857/mug_n0ziue.png"
            alt="mug"
            width={200}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
