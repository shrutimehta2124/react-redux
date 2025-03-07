import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HookList from "./Components/HookList";
import ExampleList from "./Components/ExampleList";
import ExampleDetail from "./Components/ExampleDetail";
import "./App.css"; // Import CSS for styling

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <h1>React Hooks Explorer</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>

        {/* Routing Section */}
        <div className="content">
          <Routes>
            <Route path="/" element={<HookList />} />
            <Route path="/hooks/:hookName" element={<ExampleList />} />
            <Route path="/hooks/:hookName/:exampleId" element={<ExampleDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
