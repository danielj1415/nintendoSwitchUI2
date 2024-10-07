import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScreenHome from "./ScreenHome";
import ScreenSettings from "./ScreenSettings";
import ScreenAlbum from "./ScreenAlbum";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScreenHome />} />
        <Route path="/settings" element={<ScreenSettings />} />
        <Route path="/album" element={<ScreenAlbum/>}/>
      </Routes>
    </Router>
  );
}

export default App;