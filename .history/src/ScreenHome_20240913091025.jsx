
import "./ScreenHome.css";
import WallpaperOne from "./assets/images/wallpaperOne.jpg";

function ScreenHome(){

    const squares = new Array(5).fill(0); // Creates an array of 5 elements

    return(
        <div>
            <div className = "homeScreen">
            <img src = {WallpaperOne} className = "wallpaper"/> 
            <div className="square-row">
                {squares.map((_, index) => (
                <div key={index} className="game"></div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default ScreenHome;