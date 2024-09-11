
import "./ScreenHome.css";
import WallpaperOne from "./assets/images/wallpaperOne.jpg";

function ScreenHome(){
    return(
        <div>
            <div className = "homeScreen">
            <img src = {WallpaperOne} className = "wallpaper"/> 
            <div className = "square-row">
                <div className = "game"></div>
                <div className = "game"></div>
                <div className = "game"></div>
                <div className = "game"></div>
                <div className = "game"></div>
            </div>
            </div>
        </div>
    )
}

export default ScreenHome;