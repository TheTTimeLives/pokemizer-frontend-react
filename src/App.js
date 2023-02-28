import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage  from "./components/pages/LandingPage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Using elements in route is better than stating component. Prevents writing extra useEffect handling within component to avoid accidental restarting react lifecycle hooks which can cause duplicate components by the router being created each time the route is hit. */}
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
