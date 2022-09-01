import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import HabitForm from './components/HabitForm';
import CommunityForm from './components/CommunityForm';

// ! TESTING -------------------------

function App() {
  return (
    <div className="App">
      <Login />
      <HabitForm />
      <SignUp />
      <CommunityForm />
    </div>
  )
}

export default App;
