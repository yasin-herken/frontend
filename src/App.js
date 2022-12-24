import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { selectUser } from "./Features/User/userSlice";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  const user = useSelector(selectUser);
  return (
    <React.Fragment>
      <Routes>
        {user ? (
          <React.Fragment>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/register" element={<Navigate to="/" />} />
            <Route path="/login" element={<Navigate to="/" ></Navigate>} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </React.Fragment>
        )}
      </Routes>
    </React.Fragment>
  );
}

export default App;
