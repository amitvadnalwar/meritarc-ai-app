import logo from "./logo.svg";
import "./App.css";
import Logo from "./assets/images/logo.png"
import Sidebar from "./components/Sidebar";
import Chatbox from "./components/ai-generator/Chatbox";

function App() {
  return (
    <div className="App">
      <div className="App-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="App-container">
        <Sidebar />
        <Chatbox/>
      </div>
      
    </div>
  );
}

export default App;
