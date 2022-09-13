import { api } from './api'


//! read all habits
export const allHabitsWs = () => api.get('/habit/allhabits')

//* create habit
export const addHabitWs = (data) => api.post('/habit/addHabit', data)

//! update habit
export const editHabitWs = (data) => api.post('/habit/edit-habit/:id', data)

//! delete habit           //? Checar si lleva data
export const deleteHabitWs = (id) => api.delete(`/habit/delete-habit/${id}`)
