import Products from "./pages/Products";
import "./styles/index.css";
import RegistrationForm from "./pages/RegistrationForm";
import Navbar from "./components/Navbar";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AppRoutes/>
      {/* <Products /> */}
      {/* <RegistrationForm />  */}
    </div>
  );
}

export default App;
