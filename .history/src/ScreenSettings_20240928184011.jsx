
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
      const [optionsTheme, setOptionsTheme] = useState(true); // true means the user is on the Themes page for the system settings
      const [optionsWallpaper, setOptionsWallpaper] = useState(false); // true means the user is on the Wallpaper page for the system settings

      useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setSelectedIndex((prevIndex) =>
              prevIndex < settingsOptions.length - 1 ? prevIndex + 1 : 0
            );
          } else if (event.key === "ArrowUp") {
            event.preventDefault();
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
            <div className = "spacer"/>
            {/* Render the first option separately */}
            {settingsOptions.slice(0, 1).map((option, index) => (
                <div
                    key={index}
                    className={`leftMenuOptions ${
                        selectedIndex === index ? "selectedOption" : "unselectedOption"
                    }`}
                >
                    {selectedIndex === index && (
                        <div className="selectedOptionLine marginLeft8 marginRight16" />
                    )}
                    <div>
                        <p className={`subheadingText`}>{option.name}</p>
                    </div>
                    {/* Add a line after the first option */}
                    <div className="lineAfterOption"></div>
                </div>
            ))}
            <div className = "square"/>
            {/* Render the remaining options */}
            {settingsOptions.slice(1).map((option, index) => (
            <div
                key={index + 1}  // Offset index for the remaining items
                className={`leftMenuOptions ${
                    selectedIndex === index + 1 ? "selectedOption" : "unselectedOption"
                }`}
            >
                {selectedIndex === index + 1 && (
                    <div className="selectedOptionLine marginLeft8 marginRight16" />
                )}
                <div>
                    <p className={`subheadingText`}>{option.name}</p>
                </div>
            </div>
            ))}
            </div>
                <div className="rightMenuSettings">
                {optionsTheme === true && ( // theme page on system settings
                    <div className = "themePage">
                        <div className = "themeLine"></div>
                        <div className = "themeRow marginLeft174 marginTop32">
                            <div className = "themeWhiteRectangle marginRight16"></div>
                            <p className = "subheadingText">Basic White</p>
                        </div>
                        
                    </div>
                )}
                {optionsWallpaper === true && ( // wallpaper page on system settings
                    <div className = "wallpaperPage">
                        Your mom's wallpaper
                    </div>
                )}
                </div>
            </div>
            <div className = "bottomMenuSettings"></div>
        </div>
    )
}

export default ScreenSettings;