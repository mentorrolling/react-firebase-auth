import { useEffect, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { userAuthContext } from "./context/UserAuthContext";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const { user } = useContext(userAuthContext);

  useEffect(() => {
    navigate("/");
  }, [user]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
