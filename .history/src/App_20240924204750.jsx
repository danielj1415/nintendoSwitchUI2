import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScreenHome from "./ScreenHome";
import ScreenSettings from "./ScreenSettings";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScreenHome />} />
        <Route path="/settings" element={<ScreenSettings />} />
      </Routes>
    </Router>
  );
}

export default App;