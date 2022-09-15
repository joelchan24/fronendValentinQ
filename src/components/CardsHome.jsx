import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const CardsHome = () => {
  return (
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
            habits that you can apply at the time of day that you prefer
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            href="https://twitter.com/compose/tweet"
            target="_blanck"
          >
            <TwitterIcon /> share
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
            a vision board where you can save your goal
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            href="https://twitter.com/compose/tweet"
            target="_blank"
          >
            <TwitterIcon /> share
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
            a community where you can leave suggestions
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            href="https://twitter.com/compose/tweet"
            target="_blank"
          >
            <TwitterIcon /> share
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardsHome;
