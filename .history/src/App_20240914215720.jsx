import { useState } from 'react'
import ScreenHome from "./ScreenHome"
import ScreenAlbum from "./ScreenAlbum"
import ScreenPhoto from "./ScreenPhoto"
import ScreenSettings from "./ScreenSettings"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <div>
      <ScreenHome/>
    </div>
  )
}

export default App
