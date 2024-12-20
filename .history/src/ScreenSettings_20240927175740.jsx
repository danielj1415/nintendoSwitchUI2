
import "./ScreenSettings.css";
import iconBrightnessLight from "./assets/icons/iconBrightnessLight.svg";
import { useState, useEffect } from "react";

function ScreenSettings(){

    const settingsOptions = [
        { name: "Support/Health & Safety"},
        { name: "Themes"},
        { name: "Wallpapers"},
        { name: "Notifications"},
        { name: "Sleep Mode"},
        //{ name: "Airplane Mode"}, // Add corresponding images for these games
      ];

      const [selectedIndex, setSelectedIndex] = useState(0);

      useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === "ArrowDown") {
            setSelectedIndex((prevIndex) =>
              prevIndex < settingsOptions.length - 1 ? prevIndex + 1 : 0
            );
          } else if (event.key === "ArrowUp") {
            setSelectedIndex((prevIndex) =>
              prevIndex > 0 ? prevIndex - 1 : settingsOptions.length - 1
            );
          }
        };
    
        window.addEventListener("keydown", handleKeyDown);
    
        // Clean up the event listener
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, [settingsOptions.length]);

    return(
        <div className = "settingsScreen">
            <div className = "topMenuSettings">
                <div className = "topMenuRow">
                    <img src = {iconBrightnessLight} className = "iconBrightnessLight marginRight28 marginLeft108"/>
                    <p className = "headingText">System Settings</p>
                </div>
                <div className = "divider"/>
            </div>
            <div className="middleMenuSettings">
            <div className="leftMenuSettings">
            {settingsOptions.map((option, index) => (
                <div
                key={index}
                className={`leftMenuOptions ${
                    selectedIndex === index ? "selectedOption" : ""
                }`}
                >
                <div>
                    <div className="selectedOptionLine marginLeft8 marginRight16" />
                    <p className={`subheadingText`}>{option.name}</p>
                </div>
                {selectedIndex === index && (
                    <div className="selectedOptionSub">
                        <div className="selectedOptionLine marginLeft8 marginRight16" />
                    </div>
                )}
                </div>
            ))}
            </div>
                <div className="rightMenuSettings">

                </div>
            </div>
            <div className = "bottomMenuSettings"></div>
        </div>
    )
}

export default ScreenSettings;