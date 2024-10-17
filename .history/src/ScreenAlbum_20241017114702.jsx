
import "./ScreenAlbum.css";

import { Navigate, useNavigate } from "react-router-dom";
import iconAlbumDark from "./assets/icons/iconAlbumDark.svg";
import iconSwitchDark from "./assets/icons/iconSwitchDark.svg";
import iconADark from "./assets/icons/iconADark.svg";
import iconBDark from "./assets/icons/iconBDark.svg";
import iconXDark from "./assets/icons/iconXDark.svg";
import iconYDark from "./assets/icons/iconYDark.svg";
import { useState, useEffect } from "react";

import WallpaperOne from "./assets/images/wallpaperOne.jpg";
import WallpaperTwo from "./assets/images/wallpaperTwo.png";
import WallpaperThree from "./assets/images/wallpaperThree.png";
import WallpaperFour from "./assets/images/wallpaperFour.png";
import WallpaperFive from "./assets/images/wallpaperFive.png";
import WallpaperSix from "./assets/images/wallpaperSix.png";
import WallpaperSeven from "./assets/images/wallpaperSeven.png";
import WallpaperEight from "./assets/images/wallpaperEight.png";
import WallpaperNine from "./assets/images/wallpaperNine.png";
import WallpaperTen from "./assets/images/wallpaperTen.png";
import WallpaperEleven from "./assets/images/wallpaperEleven.png";
import WallpaperTwelve from "./assets/images/wallpaperTwelve.png";
import WallpaperThirteen from "./assets/images/wallpaperThirteen.png";
import WallpaperFourteen from "./assets/images/wallpaperFourteen.png";
import WallpaperFifteen from "./assets/images/wallpaperFifteen.png";
import WallpaperSixteen from "./assets/images/wallpaperSixteen.png";
import WallpaperSeventeen from "./assets/images/wallpaperSeventeen.png";
import WallpaperEighteen from "./assets/images/wallpaperEighteen.png";
import WallpaperNineteen from "./assets/images/wallpaperNineteen.png";
import WallpaperTwenty from "./assets/images/wallpaperTwenty.png";

function ScreenAlbum(){

    const images = [
        [WallpaperThree, WallpaperTwo, WallpaperOne, WallpaperFour, WallpaperFive],
        [WallpaperSix, WallpaperSeven, WallpaperEight, WallpaperNine, WallpaperTen],
        [WallpaperEleven, WallpaperTwelve, WallpaperThirteen, WallpaperFourteen, WallpaperFifteen],
        [WallpaperSixteen, WallpaperSeventeen, WallpaperEighteen, WallpaperNineteen, WallpaperTwenty],
    ]

    const [selectedImageIndex, setSelectedImageIndex] = useState([0, 0]);

    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (event) => {
            setSelectedImageIndex((prevIndex) => {
                const [currentRow, currentCell] = prevIndex;
                const totalRows = images.length;
                const totalCols = images[0].length;
    
                if (event.key === "ArrowDown") {
                    event.preventDefault();
                    const nextRow = currentRow < totalRows - 1 ? currentRow + 1 : currentRow;
                    return [nextRow, currentCell]; // Move down to the next row
                } else if (event.key === "ArrowUp") {
                    event.preventDefault();
                    const prevRow = currentRow > 0 ? currentRow - 1 : currentRow;
                    return [prevRow, currentCell]; // Move up to the previous row
                } else if (event.key === "ArrowRight") {
                    event.preventDefault();
                    const nextCell = currentCell < totalCols - 1 ? currentCell + 1 : currentCell;
                    return [currentRow, nextCell]; // Move right to the next cell
                } else if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    const prevCell = currentCell > 0 ? currentCell - 1 : currentCell;
                    return [currentRow, prevCell]; // Move left to the previous cell
                } else if (event.key === "A" || event.key === "a") {
                    // Logic for "A" key action
                } else if (event.key === "B" || event.key === "b") {
                    navigate("/settings");
                }
    
                return prevIndex; // No change if no arrow key is pressed
            });
        };
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [navigate, images]);
    
    
    return (
        <div className="albumScreen">
            <div className="albumTopMenuSettings">
                <div className = "albumTopMenuRow">
                    <img src = {iconAlbumDark} className = "iconAlbumDark marginLeft108 marginRight28"/>
                    <p className = "headingText albumHeadingText">Album</p>
                </div>
                <div className = "albumDivider"/>
            </div>
            <div className="albumMiddleMenuSettings">
                <div className="imageContainer">
                {images.map((row, rowIndex) => (
                    <div className="imageRow" key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <img
                            key={cellIndex}
                            className={`image ${selectedImageIndex[0] === rowIndex && selectedImageIndex[1] === cellIndex ? 'selected' : ''}`}
                            onClick={() => setSelectedImageIndex([rowIndex, cellIndex])} // Set the selected image on click
                            src = {cell}
                        >
                        </img>
                    ))}
                    </div>
                ))}
                </div>
            </div>
            <div className="albumBottomMenuSettings">
                <div className = "albumDivider"/>
                <div className = "albumBottomMenuRow">
                    <img src={iconSwitchDark} className="iconSwitchDark" />
                    <div className = "albumBottomMenuTextIcons">
                        <img src = {iconYDark} className = "iconBSettings"/>
                        <p className="bottomMenuSettingsRowText">Filter</p>
                        <img src = {iconXDark} className = "iconASettings"/>
                        <p className="bottomMenuSettingsRowText">Delete</p>
                        <img src = {iconBDark} className = "iconASettings"/>
                        <p className="bottomMenuSettingsRowText">Back</p>
                        <img src = {iconADark} className = "iconASettings"/>
                        <p className="bottomMenuSettingsRowText">Select</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenAlbum; 