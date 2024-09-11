
import "./ScreenHome.css";
import WallpaperOne from "./assets/images/wallpaperOne.jpg";

function ScreenHome(){
    return(
        <div>
            <div className = "homeScreen">
            <img src = {WallpaperOne}/>
            </div>
        </div>
    )
}

export default ScreenHome;