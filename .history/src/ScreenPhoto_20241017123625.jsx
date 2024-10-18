
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ScreenPhoto.css";

function ScreenPhoto(){

    const location = useLocation();
    const backgroundImage = location.state?.backgroundImage;

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
                const selectedImage = images[selectedImageIndex[0]][selectedImageIndex[1]]; // Get the selected image

            } else if (event.key === "B" || event.key === "b") {

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

            </div>
        </div>
    )
}

export default ScreenPhoto;