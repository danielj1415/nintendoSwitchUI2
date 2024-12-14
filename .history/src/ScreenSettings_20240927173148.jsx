
import "./ScreenSettings.css";
import iconBrightnessLight from "./assets/icons/iconBrightnessLight.svg";

function ScreenSettings(){

    const settingsOptions = [
        { name: "Support/Health & Safety"},
        { name: "Themes"},
        { name: "Wallpapers"},
        { name: "Notifications"},
        //{ name: "Sleep Mode"},
        //{ name: "Airplane Mode"}, // Add corresponding images for these games
      ];

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
                            <div key = {index} className = "leftMenuOptions">
                                <div>
                                    <p className = {`subheadingText`}>{option.name}</p>
                                </div>
                                {index === 0 && (
                                    <div className="square"></div>
                                )}
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