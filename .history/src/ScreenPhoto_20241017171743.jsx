
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ScreenPhoto.css";

import IconSwitchLight from "./assets/icons/iconSwitchLight.svg";
import IconALight from "./assets/icons/iconALight.svg";
import IconBLight from "./assets/icons/IconBLight.svg";
import IconXLight from "./assets/icons/iconXLight.svg";
import IconYLight from "./assets/icons/IconYLight.svg";
import IconOptionsLight from "./assets/icons/IconOptionsLight.svg";

function ScreenPhoto(){

    const location = useLocation();
    const backgroundImage = location.state?.backgroundImage;
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
            } else if (event.key === "A" || event.key === "a") {

            } else if (event.key === "B" || event.key === "b") {
                navigate("/album");
            } else if (event.key === "X" || event.key === "x") {

            } else if (event.key === "Y" || event.key === "y") {
                navigate("/", { state: { backgroundImage: backgroundImage } }); // Pass the image as state
            }
        };
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    },);

    return(
        <div className = "photoScreen">
            <img src = {backgroundImage} className = "backgroundImage"/>
            <div className = "bottomMenuPhoto">
                <div className = "bottomMenuRowPhoto">
                    <img src = {IconSwitchLight} className = "iconSwitchLight"/>
                    <div className = "bottomMenuPhotoTextIcons">
                        <img src = {IconOptionsLight} className = "iconBPhoto"/>
                        <p className = "bottomMenuRowPhotoText">Hide</p>
                        
                        <img src = {IconXLight} className = "iconBPhoto"/>
                        <p className = "bottomMenuRowPhotoText">Delete</p>
                        
                        <img src = {IconYLight} className = "iconBPhoto"/>
                        <p className = "bottomMenuRowPhotoText">Set as Wallpaper</p>
                        
                        <img src = {IconBLight} className = "iconBPhoto"/>
                        <p className = "bottomMenuRowPhotoText">Back</p>
                        
                        <img src = {IconALight} className = "iconAPhoto"/>
                        <p className = "bottomMenuRowPhotoText">Sharing and Editing</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScreenPhoto;