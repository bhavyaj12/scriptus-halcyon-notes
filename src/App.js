import "./App.css";
import "./styles/main.css";
import { Footer, NavTop } from "./components";
import { HomePage } from "./pages";

function App() {
  return (
    <div className="App">
      <NavTop />
      <main className="page-container">
      <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
