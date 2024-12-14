
import "./ScreenSettings.css";
import iconBrightnessLight from "./assets/icons/iconBrightnessLight.svg";

function ScreenSettings(){
    return(
        <div className = "settingsScreen">
            <div className = "topMenuSettings">
                <img src = {iconBrightnessLight} className = "iconBrightnessLight"/>
                <p className = "headingText">System Settings</p>
            </div>
            <div className = "middleMenuSettings">
                <div className="leftMenuSettings">

                </div>
                <div className="rightMenuSettings">

                </div>
            </div>
            <div className = "bottomMenuSettings"></div>
        </div>
    )
}

export default ScreenSettings;