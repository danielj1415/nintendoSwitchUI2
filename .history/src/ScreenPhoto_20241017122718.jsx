
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ScreenPhoto.css";

function ScreenPhoto(){

    const location = useLocation();
    const backgroundImage = location.state?.backgroundImage;

    return(
        <div className = "photoScreen">
            <div src = {backgroundImage} className = "backgroundImage"/>
        </div>
    )
}

export default ScreenPhoto;