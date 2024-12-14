
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

To make the selected image from ScreenAlbum.jsx become the background image of ScreenPhoto.jsx, you can pass the selected image's URL as state when navigating between the pages. In this case, when the user presses the "A" key, you can navigate to ScreenPhoto while passing the selected image's URL using the state parameter in react-router-dom.

Here are the steps to achieve this:

Step 1: Modify navigate in ScreenAlbum.jsx to Pass the Selected Image
You can update the navigation logic for the "A" key press to include the selected image URL as state.

js
Copy code
import "./ScreenAlbum.css";
import { Navigate, useNavigate } from "react-router-dom";
import iconAlbumDark from "./assets/icons/iconAlbumDark.svg";
import iconSwitchDark from "./assets/icons/iconSwitchDark.svg";
import iconADark from "./assets/icons/iconADark.svg";
import iconBDark from "./assets/icons/iconBDark.svg";
import iconXDark from "./assets/icons/iconXDark.svg";
import iconYDark from "./assets/icons/iconYDark.svg";
import { useState, useEffect } from "react";

// Import wallpaper images
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

function ScreenAlbum() {
    const images = [
        [WallpaperThree, WallpaperFour, WallpaperOne, WallpaperTwo, WallpaperFive],
        [WallpaperSix, WallpaperSeven, WallpaperEight, WallpaperNine, WallpaperTen],
        [WallpaperEleven, WallpaperTwelve, WallpaperThirteen, WallpaperFourteen, WallpaperFifteen],
        [WallpaperSixteen, WallpaperSeventeen, WallpaperEighteen, WallpaperNineteen, WallpaperTwenty],
    ];

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
                    const selectedImage = images[selectedImageIndex[0]][selectedImageIndex[1]]; // Get the selected image
                    navigate("/photo", { state: { backgroundImage: selectedImage } }); // Pass the image as state
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
                <div className="albumTopMenuRow">
                    <img src={iconAlbumDark} className="iconAlbumDark marginLeft108 marginRight28" alt="album" />
                    <p className="headingText albumHeadingText">Album</p>
                </div>
                <div className="albumDivider" />
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
                                    src={cell}
                                    alt={`Wallpaper ${rowIndex}-${cellIndex}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="albumBottomMenuSettings">
                <div className="albumDivider" />
                <div className="albumBottomMenuRow">
                    <img src={iconSwitchDark} className="iconSwitchDark" alt="switch" />
                    <div className="albumBottomMenuTextIcons">
                        <img src={iconYDark} className="iconBSettings" alt="filter" />
                        <p className="bottomMenuSettingsRowText">Filter</p>
                        <img src={iconXDark} className="iconASettings" alt="delete" />
                        <p className="bottomMenuSettingsRowText">Delete</p>
                        <img src={iconBDark} className="iconASettings" alt="back" />
                        <p className="bottomMenuSettingsRowText">Back</p>
                        <img src={iconADark} className="iconASettings" alt="select" />
                        <p className="bottomMenuSettingsRowText">Select</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenAlbum;
Step 2: Access the Passed Image in ScreenPhoto.jsx
In ScreenPhoto.jsx, you can use the useLocation hook from react-router-dom to access the state passed during navigation. Then, you can use this state to set the background image.

Here’s how to update ScreenPhoto.jsx:

js
Copy code
import { useLocation } from "react-router-dom";

function ScreenPhoto(){
    return(
        <div>
            This is the photo screen.
        </div>
    )
}

export default ScreenPhoto;