
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
            {squares.map((gameName, index) => (
            <div
              key={index}
              className={`game ${selectedGame === index ? "selected" : ""}`}
              onClick={() => setSelectedGame(index)} // Click to select the game
            >
              {selectedGame === index && <div className="game-name">{gameName}</div>} {/* Show the name if selected */}
            </div>
          ))}
                </div>
            </div>
        </div>
    )
}

export default ScreenHome;