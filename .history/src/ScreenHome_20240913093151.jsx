
import "./ScreenHome.css";
import WallpaperOne from "./assets/images/wallpaperOne.jpg";
import { useState } from 'react'

function ScreenHome(){
    const squares = ["Game 1", "Game 2", "Game 3", "Game 4", "Game 5"]; // Array of game names

    const [selectedGame, setSelectedGame] = useState(0);

    return(
        <div>
            <div className = "homeScreen">
            <img src = {WallpaperOne} className = "wallpaper"/> 
            <div className="square-row">
                {squares.map((_, index) => (
                <div key={index} className="game"></div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default ScreenHome;