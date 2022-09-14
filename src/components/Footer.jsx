import {
  Typography,
  Box,
  IconButton,
} from "@mui/material";

import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box className="footer--pin" sx={{
      borderTop:1,
      borderColor:'secondary.dark'
      
    }} bgcolor="primary.main" >
      <Box>
        <Typography
          variant="subtitle1"
          color="secondary"
          sx={{ typography: { sm: "subtitle1", xs: "body2" } }}
        >
          a mern application by vale quiroga.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box mr={1} ml={1} >
          <IconButton
            color="secondary"
            href="https://www.linkedin.com/in/valeqramos/"
            target="_blank"
          >
            <LinkedIn />
          </IconButton>
        </Box>
        <Box>
          <IconButton
            color="secondary"
            href="https://github.com/ValeQRamos"
            target="_blank"
          >
            <GitHub />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
