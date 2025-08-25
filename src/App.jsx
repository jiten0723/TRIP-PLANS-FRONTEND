// import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import { Login } from "./pages/Login";
// import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
