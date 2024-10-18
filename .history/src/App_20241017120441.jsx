import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScreenHome from "./ScreenHome";
import ScreenSettings from "./ScreenSettings";
import ScreenAlbum from "./ScreenAlbum";
import ScreenPhoto from "./ScreenPhoto";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScreenHome />} />
        <Route path="/settings" element={<ScreenSettings />} />
        <Route path="/album" element={<ScreenAlbum/>}/>
        <Route path="photo" element={<ScreenPhoto/>}/>
      </Routes>
    </Router>
  );
}

export default App;