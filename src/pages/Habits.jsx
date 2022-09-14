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

  const [habits, setHabits] = useState([]);

  const [filteringHabits, setFilteringHabits] = useState([]);

  useEffect(() => {
    getHabits();
  }, []);

  const allCategories = [
    ...new Set(habits.map((habit) => habit.timeSuggestion)),
  ];

  const getHabits = async () => {
    const { data } = await allHabitsWs();
    setHabits(data.habits);
    setFilteringHabits(data.habits);
  };

  const deleteHabit = (id) => {
    const newHabits = habits.filter((habit) => habit._id !== id);
    setHabits(newHabits);
    setFilteringHabits(newHabits);
  };

  const deleteData = async (id) => {
    try {
      await deleteHabitWs(id);
      deleteHabit(id);
    } catch (error) {
      alert(`ERROR : ${error.response.data.errorMessage}`);
    }
  };

  const filterHabits = (category) => {
    if (category === "All") {
      setFilteringHabits(habits);
      return;
    }
    const newHabits = habits.filter((item) => item.timeSuggestion === category);
    setFilteringHabits(newHabits);
  };

  return (
    <Box>
      <Typography variant="h2">Micro-Habits</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button
          size="large"
          color="secondary"
          onClick={() => filterHabits("All")}
        >
          All
        </Button>
        {allCategories.map((category) => (
          <Button
            size="large"
            color="secondary"
            onClick={() => filterHabits(category)}
            sx={{ ml: 4 }}
          >
            {category}
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteringHabits.map((habit) => (
          <Card
            sx={{
              maxWidth: 300,
              margin: 2,
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={choosingImg(habit.timeSuggestion)}
              alt="green iguana"
            />
            <CardContent sx={{pb:'0'}}  >
              <Typography gutterBottom variant="h7" component="div">
                {habit.title}
              </Typography>
              <Box
                sx={{
                  height: 100,
                  overflowY: "Auto",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {habit.description}
                </Typography>
              </Box>
              <Box sx={{
                height:50,
                overFlowY:"Auto"
              }} >
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  marginTop={1}
                >
                  WHY? {habit.reason}
                </Typography>
              </Box>
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
