
import "./ScreenSettings.css";
import iconBrightnessLight from "./assets/icons/iconBrightnessLight.svg";

function ScreenSettings(){

    const settingsOptions = ["Support/Health % Safety", "Themes", "Wallpapers", "Notifications", "Sleep Mode", "Airplane Mode", "Screen Brightness"]

    return(
        <div className = "settingsScreen">
            <div className = "topMenuSettings">
                <div className = "topMenuRow">
                    <img src = {iconBrightnessLight} className = "iconBrightnessLight marginRight28 marginLeft108"/>
                    <p className = "headingText">System Settings</p>
                </div>
                <div className = "divider"/>
            </div>
            <div className = "middleMenuSettings">
                <div className="leftMenuSettings">
                    {
                        settingsOptions.map((option, index) => (
                            <div key = {index}>

                            </div>
                        ))
                    }
                </div>
                <div className="rightMenuSettings">

                </div>
            </div>
            <div className = "bottomMenuSettings"></div>
        </div>
    )
}

export default ScreenSettings;