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

const HomePage = (props) => {
  return (
    <Container sx={{padding: 3}} >
      <Box mt={3} >
        <Typography variant="h4">Hi there! Welcome to PEBBLES.</Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{padding: 3}} >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sed, omnis inventore, labore velit consequatur blanditiis odit delectus explicabo tempore exercitationem similique ducimus officiis excepturi repudiandae ea quos distinctio quaerat.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
