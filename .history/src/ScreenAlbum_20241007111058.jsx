
import "./ScreenAlbum.css";

import { useNavigate } from "react-router-dom";

function ScreenAlbum(){
    return (
        <div className="albumScreen">
            <div className="albumTopMenuSettings">
                <div className = "albumTopMenuRow">
                <div className="albumDivider" />
                </div>
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