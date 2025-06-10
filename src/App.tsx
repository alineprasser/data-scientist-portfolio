import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Certificates from "./pages/Certificates";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/certificates"
          element={<Certificates />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
