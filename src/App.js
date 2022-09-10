import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import routes from "./config/routes";
import { Navbar } from "./components";
import { logoutWs } from "./services/auth-ws";

function App() {
  const [pebblesUser, setPebblesUser] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("connected");
    if (user) {
      setPebblesUser(JSON.parse(user));
      setIsLoading(false);
    } else {
      setPebblesUser(null);
      setIsLoading(false);
    }
  }, []);

  const authentication = (user) => {
    localStorage.setItem("connected", JSON.stringify(user));
    setPebblesUser(user);
  };

  const handleLogout = async () => {
    try {
      const res = await logoutWs();
      console.log("res del logout --->", res);
      alert("LOGOUT SUCCESS");
      navigate("/");
      setPebblesUser(null);
      localStorage.removeItem("connected");
    } catch (error) {
      console.log(error.response.data.errorMessage);
      alert(`ERROR : ${error.response.data.errorMessage}`);
    }
  };
  if (isLoading) {
    return <div> Is loading... </div>;
  }
  return (
    <div className="App">
      <Navbar pebblesUser={pebblesUser} handleLogout={handleLogout} />
      <Routes>
        {routes({ pebblesUser, authentication, handleLogout }).map(
          ({ path, element }) => (
            <Route key={path} {...{ path, element }} />
          )
        )}
      </Routes>
    </div>
  );
}

export default App;
