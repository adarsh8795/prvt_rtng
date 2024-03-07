import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* <Route path="/home" element={<PrivateRoute component={<Home />} />} /> */}
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/" element=<Login /> />
      </Routes>
    </div>
  );
};

export default App;
