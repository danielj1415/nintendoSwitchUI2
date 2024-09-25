
import "./ScreenHome.css";
import WallpaperOne from "./assets/images/wallpaperOne.jpg";
import WallpaperTwo from "./assets/images/wallpaperTwo.png";
import { useState, useEffect } from 'react'
import gameSSBU from "./assets/games/gameSSBU.png";
import gamePV from "./assets/games/gamePV.png";
import gameANCH from "./assets/games/gameANCH.png";
import gameMK8D from "./assets/games/gameMK8D.png";
import gamePLA from "./assets/games/gamePLA.png";
import imageProfile from "./assets/images/imageProfileKirby.jpg";
import iconRow1 from "./assets/icons/iconRow1.svg";
import iconRow2 from "./assets/icons/iconRow2.svg";
import iconRow3 from "./assets/icons/iconRow3.svg";
import iconRow4 from "./assets/icons/iconRow4.svg";
import iconRow5 from "./assets/icons/iconRow5.svg";
import iconRow6 from "./assets/icons/iconRow6.svg";
import iconRow7 from "./assets/icons/iconRow7.svg";
import iconSwitchLight from "./assets/icons/iconSwitchLight.svg";
import iconALight from "./assets/icons/iconALight.svg";
import iconOptionsLight from "./assets/icons/iconOptionsLight.svg";
import { useNavigate } from "react-router-dom";

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
    const [selectedIcon, setSelectedIcon] = useState(null);
    const gameToIconMap = [0, 2, 4, 6];
    const iconToGameMap = [0, 1, 1, 2, 2, 3, 3]; // Icons 1 and 2 -> Game 1, Icons 3 and 4 -> Game 2, etc.
    const navigate = useNavigate();
    const iconData = [
        { src: iconRow1, className: "icons" },
        { src: iconRow2, className: "iconRowImage" },
        { src: iconRow3, className: "iconRowImage" },
        { src: iconRow4, className: "iconRowImage" },
        { src: iconRow5, className: "iconRowImage2" },
        { src: iconRow6, className: "iconRowImage" },
        { src: iconRow7, className: "iconRowImage" }
    ];

  // Handle keyboard navigation
useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === "A" || event.key === "a") {
      // Check if the selected icon is the settings icon (index 5)
      if (selectedIcon === 5) {
        // Navigate to the settings screen
        navigate("/settings");
      }
    } else if (selectedIcon === null) {
      // Navigating the games
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedGame((prev) => (prev + 1) % squares.length);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedGame((prev) => (prev - 1 + squares.length) % squares.length);
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedIcon(gameToIconMap[selectedGame % gameToIconMap.length]);
      }
    } else {
      // Navigating the icons
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedIcon((prev) => (prev + 1) % iconData.length);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedIcon((prev) => (prev - 1 + iconData.length) % iconData.length);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedGame(iconToGameMap[selectedIcon]);
        setSelectedIcon(null);
      }
    }
  };
  
    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);
  
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedGame, selectedIcon, squares.length, iconData.length, gameToIconMap]);
  

    return(
        <div>
            <div className = "homeScreen">
            <img src = {WallpaperTwo} className = "wallpaper"/> 
            <div className = "profileIconContainer">
                <p className = "profileFriends">3</p>
                <img src = {imageProfile} className = "imageProfile"/>
            </div>
            <div className="square-row">
            {games.map((game, index) => (
                <div
                key={index}
                className={`game ${
                    selectedIcon === null && selectedGame === index ? "selected" : ""
                }`}
                onClick={() => setSelectedGame(index)} // Click to select the game
                >
                <img src={game.image} alt={game.name} className="game-image" />
                {selectedIcon === null && selectedGame === index && (
                    <div className="game-name">
                    <p className="game-name-text">{game.name}</p>
                    </div>
                )}
                </div>
            ))}
            </div>

            <div className="circle-row">
                {iconData.map((icon, index) => (
                  <div key={index} className={`iconRowCircle ${selectedIcon === index ? "selectedIcon" : ""}`} 
                  onClick={() => setSelectedIcon(index)}>
                    <img src={icon.src} className={icon.className} alt={`Icon ${index + 1}`} />
                  </div>
                ))}
            </div>
            <div className = "bottomMenu">
              <div className = "lineDivider"></div>
              <div className = "bottomMenuRow">
                <img src = {iconSwitchLight} className = "iconSwitchLight"/>
                <div className = "bottomMenuRowIcons">
                  <img src = {iconOptionsLight} className = "iconOptions"/>
                  <p className = "bottomMenuRowText">Options</p>
                  <img src = {iconALight} className = "iconA"/>
                  <p className = "bottomMenuRowText">Start</p>
                </div>
              </div>
            </div>
            </div>
        </div>
    )
}

export default ScreenHome;