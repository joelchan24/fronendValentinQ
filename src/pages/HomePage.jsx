import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Container,
  Typography,
  Box,
  Paper
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
              alignItems: "flex-end",
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
              fontWeight="light"
              color="secondary"
            >
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
            width={210}
          />
        </Box>
      </Box>
      <Box m={2}>
        <Box maxWidth={850}>
          <Typography sx={{ typography: { sm: "h5", xs: "subtitle2" } }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a
            nisi deserunt unde consectetur corporis, possimus nemo iste impedit
            voluptas minima temporibus?
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        maxWidth={850}
      >
        <Card sx={{ maxWidth: 250, margin: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://res.cloudinary.com/duavnrhnp/image/upload/v1663086479/microhabits_cunaii.jpg"
            alt="book"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              micro-habits
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Camembert de normandie jarlsberg cheesy feet.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" color="secondary" size="small">
              Share
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 250, margin: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://res.cloudinary.com/duavnrhnp/image/upload/v1663086479/visionboard_btoz8p.jpg"
            alt="cloud"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              vision board
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cheese slices cauliflower cheese dolcelatte bavarian
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" color="secondary" size="small">
              Share
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 250, margin: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://res.cloudinary.com/duavnrhnp/image/upload/v1663086479/community_zk3oor.jpg"
            alt="chat"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              community
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cheeseburger fondue the big cheese.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" color="secondary" size="small">
              Share
            </Button>
          </CardActions>
        </Card>
      </Box>
      
    </Container>
  );
};

export default HomePage;
