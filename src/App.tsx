import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Certificates from "./pages/Certificates";
import { SEO } from "./components/SEO";

function App() {
  return (
    <BrowserRouter>
      <SEO />
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
