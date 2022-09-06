import { useState, useEffect } from "react";
import { allHabitsWs, deleteHabitWs } from "../services/habitWs";

const Habits = (props) => {
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

  console.log(habits[0].created)

  return (
    <div>
      <h1>Micro-Habits</h1>
      <ul>
        {habits.map((habit) => (
          <li>
            {habit.title}
            {props.pebblesUser.role === "Admin" && (
              <button onClick={() => deleteData(habit._id)}> Delete </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Habits;
