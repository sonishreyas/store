import "./styles/index.css";
import Navbar from "./components/Navbar";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AppRoutes/>
    </div>
  );
}

export default App;
