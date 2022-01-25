import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "./assets/styles/_global.scss";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
