import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/styles.css";
import { Home } from "./components/Home"
import { NavBar } from "./components/NavBar";
import { Greeting } from "./components/Greeting";
import { Footer } from "./components/Footer";
import { Login } from "./components/LogIn"

export const App = () => {
  return (
    <>
      <Router>
      <NavBar />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/greeting" element={<Greeting />} />
          {/* Dodaj więcej tras, jeśli potrzebujesz */}
        </Routes>
      </div>
      <Footer />
    </Router>
      </>
  );
};
