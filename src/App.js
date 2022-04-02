import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/main.css";
import { Footer, NavTop } from "./components";
import { HomePage, LoginPage, SignupPage } from "./pages";

function App() {
  return (
    <div className="App">
      <NavTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
