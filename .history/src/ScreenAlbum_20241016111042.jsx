
import "./ScreenAlbum.css";

import { Navigate, useNavigate } from "react-router-dom";
import iconAlbumDark from "./assets/icons/iconAlbumDark.svg";
import iconSwitchDark from "./assets/icons/iconSwitchDark.svg";
import iconADark from "./assets/icons/iconADark.svg";
import iconBDark from "./assets/icons/iconBDark.svg";
import iconXDark from "./assets/icons/iconXDark.svg";
import iconYDark from "./assets/icons/iconYDark.svg";
import { useEffect } from "react";

function ScreenAlbum(){

    const images = [
        ["imageOne", "imageTwo", "imageThree", "imageFour", "imageFive"],
        ["imageSix", "imageSeven", "imageEight", "imageNine", "imageTen"],
        ["imageEleven", "imageTwelve", "imageThirteen", "imageFourteen", "imageFifteen"],
        ["imageSixteen", "imageSeventeen", "imageEighteen", "imageNineteen", "imageTwenty"],
        ["imageTwentyOne", "imageTwentyTwo", "imageTwentyThree", "imageTwentyFour", "imageTwentyFive"],
        ["imageTwentyFour", "imageTwentySeven", "imageTwentyEight", "imageTwentyNine", "imageThirty"]
    ]

    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowDown") {
                event.preventDefault();
            
            } else if (event.key === "ArrowUp") {
                event.preventDefault();
                
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                
            } else if (event.key === "ArrowLeft") {
                event.preventDefault();
                
            } else if (event.key === "A" || event.key === "a"){

            } else if (event.key === "B" || event.key === "b"){
                navigate("/settings");
            }
        };
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    },);
    
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
                <div className="gridContainer">
                {images.map((row, rowIndex) => (
                    <div className="imageRow" key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <div className="image" key={cellIndex}>
                        {cell}
                        </div>
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