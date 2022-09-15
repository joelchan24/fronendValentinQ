import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { FacebookShareButton, TwitterShareButton } from "react-simple-share";
const BasicExample = () => <FacebookShareButton />;
const BasicTwitter = () => <TwitterShareButton />

const TwitterShare = () => (
  <TwitterShareButton 
    url="https://twitter.com/home"
    color="#1DA1F2"
    size="40px"
    text="Hey check this out, you can have a vision board on this app"
    hashtags="pebbles"
  />
)

const OptionsExample = () => (
  <FacebookShareButton
    url="https://github.com/swozniak/react-simple-share/"
    color="#3B5998"
    size="100px"
  />
);

const NotFound = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <Box>
      <TwitterShare />
      <OptionsExample />
      <BasicExample />
      <BasicTwitter />
      <Box mt={6}>
        <Typography variant="h2" color="red">
          404 <br /> Not Found
        </Typography>
        <Box mt={3}>
          <Button
            variant="contained"
            size="large"
            color="error"
            onClick={backToHome}
          >
            Back to Home
          </Button>
          
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;
