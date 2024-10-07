
import "./ScreenAlbum.css";

import { useNavigate } from "react-router-dom";
import iconAlbumDark from "./assets/icons/iconAlbumDark.svg";

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
                Middle
            </div>
            <div className="albumBottomMenuSettings">
                <div className = "albumDivider"/>
            </div>
        </div>
    );
}

export default ScreenAlbum; 