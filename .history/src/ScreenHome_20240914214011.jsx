
import "./ScreenHome.css";
import WallpaperOne from "./assets/images/wallpaperOne.jpg";
import { useState, useEffect } from 'react'
import gameSSBU from "./assets/games/gameSSBU.png";
import gamePV from "./assets/games/gamePV.png";
import gameANCH from "./assets/games/gameANCH.png";
import gameMK8D from "./assets/games/gameMK8D.png";
import gamePLA from "./assets/games/gamePLA.png";
import imageProfile from "./assets//images/imageProfile.png";

function ScreenHome(){
    const squares = ["Super Smash Bros: Ultimate", "Pokemon Violet", "Animal Crossing: New Horizons", "Mario Kart 8 Deluxe", "Pokemon Legends: Arceus", "Game 6", "Game 7"]; // Array of game names
    const games = [
        { name: "Super Smash Bros: Ultimate", image: gameSSBU },
        { name: "Pokemon Violet", image: gamePV },
        { name: "Animal Crossing: New Horizons", image: gameANCH },
        { name: "Mario Kart 8 Deluxe", image: gameMK8D },
        { name: "Pokemon Legends: Arceus", image: gamePLA },
        { name: "Game 6", image: null }, // Add corresponding images for these games
        { name: "Game 7", image: null }, // Add corresponding images for these games
      ];

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
            <img src = {imageProfile}/>
            <div className="square-row">
            {games.map((game, index) => (
                <div
                key={index}
                className={`game ${selectedGame === index ? "selected" : ""}`}
                onClick={() => setSelectedGame(index)} // Click to select the game
                >
                <img src={game.image} alt={game.name} className="game-image" />
                {selectedGame === index && (
                    <div className="game-name">
                    <p className="game-name-text">{game.name}</p>
                    </div>
                )}
                </div>
            ))}
            </div>
            </div>
        </div>
    )
}

export default ScreenHome;