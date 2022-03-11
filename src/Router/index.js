import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  return !token ? <Navigate to="/login" /> : children;
}

const Router = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/"
      element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      }
    />
  </Routes>
);

export default Router;
