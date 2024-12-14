
import "./ScreenAlbum.css";

import { useNavigate } from "react-router-dom";
import iconAlbumDark from "./assets/icons/iconAlbumDark.svg";

function ScreenAlbum(){
    return (
        <div className="albumScreen">
            <div className="albumTopMenuSettings">
                <div className = "albumTopMenuRow">
                    <img src = {iconAlbumDark} className = "iconAlbumDark/>
                    <p className = "headingText">Album</p>
                </div>
                <div className = "albumDivider"/>
            </div>
            <div className="albumMiddleMenuSettings">
                Middle
            </div>
            <div className="albumBottomMenuSettings">
                Bottom
            </div>
        </div>
    );
}

export default ScreenAlbum; 