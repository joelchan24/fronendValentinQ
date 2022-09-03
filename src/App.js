import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import { Navbar } from "./components";
import { logoutWs } from "./services/auth-ws";

function App() {
  const [pebblesUser, setPebblesUser] = useState(null);

  const authentication = (user) => {
    setPebblesUser(user);
  };

  const handleLogout = async () => {
    try {
      const res = await logoutWs();
      console.log(res);
      alert("LOGOUT SUCCESS");
      setPebblesUser(null)
    } catch (error) {
      console.log(error.response.data.errorMessage);
      alert(`ERROR : ${error.response.data.errorMessage}`)
    }
  };
  return (
    <div className="App"> 
      <Router>          
        <Navbar pebblesUser={pebblesUser} handleLogout={handleLogout} />
        <Routes>
          {routes({pebblesUser, authentication, handleLogout}).map(({ path, element }) => (
            <Route key={path} {...{ path, element }} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
