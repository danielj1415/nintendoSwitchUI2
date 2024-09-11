
import "./ScreenHome.css";
import WallpaperOne from "./assets/images/wallpaperOne.jpg";

function ScreenHome(){
    return(
        <div>
            <div className = "homeScreen">
            <img src = {WallpaperOne} className = "wallpaper"/>
            </div>
        </div>
    )
}

export default ScreenHome;