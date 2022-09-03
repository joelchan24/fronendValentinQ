import {} from "react-router-dom";
import {
  Avatar,
  Paper,
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Stack,
} from "@mui/material";

const ProfilePage = (props) => {
  console.log('props.pebblesUser ---> ', props.pebblesUser)
  return (
    <Container>
      <Typography variant="h3"> Profile Page. </Typography>
      <Box>
        <Grid item xs={4}>
          <Paper elevation={10}>
            <Avatar src={props.pebblesUser.avatarUrl} />
            <Typography variant="subtitle1">Full Name: {props.pebblesUser.firstName} {props.pebblesUser.lastName} </Typography>
            <Typography variant="subtitle1">Username: {props.pebblesUser.username} </Typography>
            <Typography variant="subtitle1">Email: {props.pebblesUser.email} </Typography>
            <Typography variant="subtitle1">Role: {props.pebblesUser.role}  </Typography>
            {props.pebblesUser.role === 'Admin' && <h1> TEST Admin </h1>}
          </Paper>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProfilePage;
