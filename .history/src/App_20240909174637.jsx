import { useState } from 'react'
import HomeScreen from './homeScreen'
import AlbumScreen from "./albumScreen"
import PhotoScreen from "./photoScreen"
import SettingsScreen from "./settingsScreen"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <div className = "test">
      <AlbumScreen/>
    </div>
  )
}

export default App
