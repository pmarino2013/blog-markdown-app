import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRotes from "./routes/ProtectedRotes";

import LoginScreen from "./pages/LoginScreen";
import RoutesDos from "./routes/RoutesDos";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRotes>
              <RoutesDos />
            </ProtectedRotes>
          }
        />

        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
