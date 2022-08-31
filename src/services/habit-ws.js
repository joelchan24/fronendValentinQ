import { api } from './api'
import axios from 'axios'

// allHabits
export const allHabitsWs = () => api.get('/habit/allhabits')

// addHabit
export const addHabitWs = (data) => api.post('/habit/addHabit', data)

// edit-Habit
export const editHabitWs = (data) => api.post('/habit/edit-habit/:id', data)

// delete-habit           //? Checar si lleva data
export const deleteHabitWs = () => api.delete('/habit/delete-habit/:id')