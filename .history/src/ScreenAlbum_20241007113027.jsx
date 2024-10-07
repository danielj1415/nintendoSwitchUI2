
import "./ScreenAlbum.css";

import { useNavigate } from "react-router-dom";
import iconAlbumDark from "./assets/icons/iconAlbumDark.svg";
import iconSwitchDark from "./assets/icons/iconSwitchDark.svg";
import iconADark from "./assets/icons/iconADark.svg";
import iconBDark from "./assets/icons/iconBDark.svg";
import iconXDark from "./assets/icons/iconXDark.svg";
import iconYDark from "./assets/icons/iconYDark.svg";

function ScreenAlbum(){
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

            </div>
            <div className="albumBottomMenuSettings">
                <div className = "albumDivider"/>
                <div className = "albumBottomMenuRow">
                    
                </div>
            </div>
        </div>
    );
}

export default ScreenAlbum; 