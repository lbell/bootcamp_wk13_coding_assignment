import "./App.css";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
