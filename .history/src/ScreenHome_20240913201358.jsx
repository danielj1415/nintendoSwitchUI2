
import "./ScreenHome.css";
import WallpaperOne from "./assets/images/wallpaperOne.jpg";
import { useState, useEffect } from 'react'

function ScreenHome(){
    const squares = ["Super Smash Bros: Ultimate", "Pokemon Violet", "Animal Crossing: New Horizons", "Game 4", "Game 5", "Game 6", "Game 7"]; // Array of game names

    const [selectedGame, setSelectedGame] = useState(0);

    // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault(); // Prevent the default horizontal page scroll
        setSelectedGame((prev) => (prev + 1) % squares.length); // Move to the next game
      } else if (event.key === "ArrowLeft") {
        event.preventDefault(); // Prevent the default horizontal page scroll
        setSelectedGame((prev) => (prev - 1 + squares.length) % squares.length); // Move to the previous game
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [squares.length]); // Re-run effect when the length of squares changes

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