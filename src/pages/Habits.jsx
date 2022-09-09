import { useState, useEffect } from "react";
import { allHabitsWs, deleteHabitWs } from "../services/habitWs";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";

const Habits = (props) => {
  let morning =
    "https://res.cloudinary.com/duavnrhnp/image/upload/v1662657379/morning_l7tmxm.png";
  let afternoon =
    "https://res.cloudinary.com/duavnrhnp/image/upload/v1662657380/afternoon_wy5shr.png";
  let night =
    "https://res.cloudinary.com/duavnrhnp/image/upload/v1662657380/night_lncims.png";
  let allDay =
    "https://res.cloudinary.com/duavnrhnp/image/upload/v1662657380/allday_aq1qjn.png";

  function choosingImg(timeData) {
    switch (timeData) {
      case "Morning":
        return morning;
      case "Afternoon":
        return afternoon;
      case "Night":
        return night;
      default:
        return allDay;
    }
  }

  const styles = {
    card: {
      margin:16,
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between'
    }
  }

  const [habits, setHabits] = useState([]);

  useEffect(() => {
    getHabits();
  }, []);

  const getHabits = async () => {
    const { data } = await allHabitsWs();
    setHabits(data.habits);
  };

  const deleteHabit = (id) => {
    const newHabits = habits.filter((habit) => habit._id !== id);
    setHabits(newHabits);
  };

  const deleteData = async (id) => {
    try {
      await deleteHabitWs(id);
      deleteHabit(id);
    } catch (error) {
      console.log(error.response.data.errorMessage);
      alert(`ERROR : ${error.response.data.errorMessage}`);
    }
  };

  return (
    <Box>
      <Typography variant="h2" >Micro-Habits</Typography>
      <Box sx={{
        border:'1px solid black',
        height: 40
      }} >
        <Button color="secondary" > Night </Button>

      </Box>
      <Box sx={{
        display:'flex',
        flexWrap:'wrap',
      }} >
        {habits.map((habit) => (
          <Card sx={{ 
            maxWidth: 345, 
            margin: 2,
            }}
            >
            <CardMedia
              component="img"
              height="140"
              image={choosingImg(habit.timeSuggestion)}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {habit.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {habit.description}
              </Typography>
              <Typography variant="caption" display="block" gutterBottom marginTop={1}>
                WHY? {habit.reason}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {props.pebblesUser.role === "Admin" ? (
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={() => deleteData(habit._id)}
                >
                  Delete
                </Button>
              ) : (
                <Typography>By : {habit.author}</Typography>
              )}
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Habits;
