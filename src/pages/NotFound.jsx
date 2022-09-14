import { Typography, Box, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <Box>
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
