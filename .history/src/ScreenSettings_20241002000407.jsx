import "./ScreenSettings.css";
import iconBrightnessLight from "./assets/icons/iconBrightnessLight.svg";
import { useState, useEffect } from "react";
import iconCheckMark from "./assets/icons/iconCheckMark.svg";

function ScreenSettings() {

    const settingsOptions = [
        { name: "Support/Health & Safety" },
        { name: "Themes" },
        { name: "Wallpapers" },
        { name: "Notifications" },
        { name: "Sleep Mode" },
    ];

    const themeOptions = [
        { name: "Basic White", isSelected: false, colorClass: "themeWhiteRectangle" },
        { name: "Basic Black", isSelected: false, colorClass: "themeBlackRectangle" },
    ];

    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    const [optionsTheme, setOptionsTheme] = useState(true); // true means the user is on the Themes page for the system settings
    const [optionsWallpaper, setOptionsWallpaper] = useState(false); // true means the user is on the Wallpaper page for the system settings
    const [selectedThemeIndex, setSelectedThemeIndex] = useState(null); // Tracks the currently selected theme.
    
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowDown") {
                event.preventDefault();
                if(selectedOptionIndex !== null){
                    setSelectedOptionIndex((prevIndex) =>
                    prevIndex < settingsOptions.length - 1 ? prevIndex + 1 : 0
                );
                }
                if(selectedThemeIndex !== null){
                    setSelectedThemeIndex((prevIndex) =>
                    prevIndex < themeOptions.length - 1 ? prevIndex + 1 : 0
                );
                }
            } else if (event.key === "ArrowUp") {
                event.preventDefault();
                if(selectedOptionIndex !== null){
                    setSelectedOptionIndex((prevIndex) =>
                    prevIndex > 0 ? prevIndex - 1 : settingsOptions.length - 1
                );
                if(selectedThemeIndex !== null){
                    setSelectedThemeIndex((prevIndex) =>
                    prevIndex > 0 ? prevIndex - 1 : themeOptions.length - 1
                );
                }
                }
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                setSelectedOptionIndex(null);  
                setSelectedThemeIndex(0);
            } else if (event.key === "ArrowLeft") {
                event.preventDefault();
                setSelectedOptionIndex(1);  // Index 1 is for "Themes" option in settingsOptions
                setSelectedThemeIndex(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [themeOptions.length, settingsOptions.length]);

    return (
        <div className="settingsScreen">
            <div className="topMenuSettings">
                <div className="topMenuRow">
                    <img src={iconBrightnessLight} className="iconBrightnessLight marginRight28 marginLeft108" />
                    <p className="headingText">System Settings</p>
                </div>
                <div className="divider" />
            </div>
            <div className="middleMenuSettings">
                <div className="leftMenuSettings">
                    <div className="spacer" />
                    {settingsOptions.slice(0, 1).map((option, index) => (
                        <div
                            key={index}
                            className={`leftMenuOptions ${selectedOptionIndex === index ? "selectedOption" : "unselectedOption"}`}
                        >
                            {selectedOptionIndex === index && (
                                <div className="selectedOptionLine marginLeft8 marginRight16" />
                            )}
                            <div>
                                <p className="subheadingText">{option.name}</p>
                            </div>
                            <div className="lineAfterOption"></div>
                        </div>
                    ))}
                    <div className="square" />
                    {settingsOptions.slice(1).map((option, index) => (
                        <div
                            key={index + 1}
                            className={`leftMenuOptions ${selectedOptionIndex === index + 1 ? "selectedOption" : "unselectedOption"}`}
                        >
                            {selectedOptionIndex === index + 1 && (
                                <div className="selectedOptionLine marginLeft8 marginRight16" />
                            )}
                            <div>
                                <p className="subheadingText">{option.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="rightMenuSettings">
                    {( // theme page on system settings
                        <div className="themePage">
                            <div className="themeSpacer" />
                            {(selectedThemeIndex === 1 || selectedThemeIndex === null) && (
                                <div className="themeLine"></div>
                            )}
                            {themeOptions.slice(0,1).map((theme, index) => (
                                <div
                                    key={index}
                                    className={`themeRow ${selectedThemeIndex === index ? "themeRowSelected" : "themeRowNotSelected"} marginLeft144`}
                                >
                                    <div className={`${theme.colorClass} ${selectedThemeIndex === index ? "selectedThemeMarginRightSpacing selectedThemeMarginLeftSpacing" : "marginRight16 marginLeft32"}`}></div>
                                    <div className="basicColorContainer">
                                        <p className="subheadingText">{theme.name}</p>
                                    </div>
                                    {selectedThemeIndex === index && <img className="iconCheckMark" src={iconCheckMark} />}
                                </div>
                            ))}
                            {selectedThemeIndex === null && (
                                <div className="themeLine"/>
                            )}
                            {themeOptions.slice(1,2).map((theme, index) => (
                                <div
                                    key={index}
                                    className={`themeRow ${selectedThemeIndex === index + 1 ? "themeRowSelected" : "themeRowNotSelected"} marginLeft144`}
                                >
                                    <div className={`${theme.colorClass} ${selectedThemeIndex === index + 1 ? "selectedThemeMarginRightSpacing selectedThemeMarginLeftSpacing" : "marginRight16 marginLeft32"}`}></div>
                                    <div className="basicColorContainer">
                                        <p className="subheadingText">{theme.name}</p>
                                    </div>
                                    {selectedThemeIndex === index + 1 && <img className="iconCheckMark" src={iconCheckMark} />}
                                </div>
                            ))}
                            {(selectedThemeIndex === 0 || selectedThemeIndex === null) && (
                                <div className="themeLine"/>
                            )}    
                        </div>
                    )}
                    {selectedOptionIndex === 20 && (
                        <div className="wallpaperPage">
                            <p className="subheadingText">Your Mom's Wallpaper</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="bottomMenuSettings">
                <div className="divider" />
            </div>
        </div>
    );
}

export default ScreenSettings;
