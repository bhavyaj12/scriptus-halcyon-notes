import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";
import "./styles/main.css";
import { Footer, NavTop } from "./components";
import { HomePage, LoginPage, SignupPage, NotesPage, TrashPage, ArchivePage } from "./pages";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <NavTop />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/addnote" element={<NotesPage />} />
            <Route path="/trash" element={<TrashPage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/mockman" element={<Mockman />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
