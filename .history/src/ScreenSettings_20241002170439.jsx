import "./ScreenSettings.css";
import iconBrightnessLight from "./assets/icons/iconBrightnessLight.svg";
import { useState, useEffect } from "react";
import iconCheckMark from "./assets/icons/iconCheckMark.svg";

function ScreenSettings() {

    const settingsOptions = [
        { name: "Support/Health & Safety", selected: false },
        { name: "Themes", selected: false },
        { name: "Wallpapers", selected: false },
        { name: "Notifications", selected: false },
        { name: "Sleep Mode", selected: false },
    ];

    const themeOptions = [
        { name: "Basic White", isSelected: true, colorClass: "themeWhiteRectangle" },
        { name: "Basic Black", isSelected: false, colorClass: "themeBlackRectangle" },
    ];

    const settingsWallpaperOptions = [
        { name: "Choose a new wallpaper"},
        { name: "Remove current wallapper"}
    ]

    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    const [optionsTheme, setOptionsTheme] = useState(true); // true means the user is on the Themes page for the system settings
    const [optionsWallpaper, setOptionsWallpaper] = useState(false); // true means the user is on the Wallpaper page for the system settings
    const [optionsMenu, setOptionsMenu] = useState(true);
    const [selectedThemeIndex, setSelectedThemeIndex] = useState(null); // Tracks the currently selected theme.
    const [selectedWallpaperIndex, setSelectedWallpaperIndex] = useState(null);
    
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowDown") {
                event.preventDefault();
                if (selectedOptionIndex !== null) {
                    // We're in the left menu (options), update `selectedOptionIndex`
                    setSelectedOptionIndex((prevIndex) =>
                        prevIndex < settingsOptions.length - 1 ? prevIndex + 1 : prevIndex
                    );
                } else if (selectedThemeIndex !== null) {
                    // We're in the right menu (themes), update `selectedThemeIndex`
                    setSelectedThemeIndex((prevIndex) =>
                        prevIndex < themeOptions.length - 1 ? prevIndex + 1 : prevIndex
                    );
                }
            } else if (event.key === "ArrowUp") {
                event.preventDefault();
                if (selectedOptionIndex !== null) {
                    // We're in the left menu (options), update `selectedOptionIndex` without wrapping around
                    setSelectedOptionIndex((prevIndex) =>
                        prevIndex > 0 ? prevIndex - 1 : prevIndex  // Stay at index 0 if already there
                    );
                } else if (selectedThemeIndex !== null) {
                    // We're in the right menu (themes), update `selectedThemeIndex` without wrapping around
                    setSelectedThemeIndex((prevIndex) =>
                        prevIndex > 0 ? prevIndex - 1 : prevIndex  // Stay at index 0 if already there
                    );
                }
            } else if (event.key === "ArrowRight" && selectedOptionIndex === 1) {
                // Move to the themes menu
                event.preventDefault();
                setSelectedOptionIndex(null);  
                setSelectedThemeIndex(0);
            } else if (event.key === "ArrowLeft" && selectedThemeIndex !== null) {
                // Move back to the left menu (Themes option)
                event.preventDefault();
                setSelectedOptionIndex(1);  
                setSelectedThemeIndex(null);
            }
        };
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedOptionIndex, selectedThemeIndex, settingsOptions.length, themeOptions.length]);
    

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
                        </div>
                    ))}
                    <div className="square" />
                    {settingsOptions.slice(1, 5).map((option, index) => (
                        <div
                            key={index + 1}
                            className={`leftMenuOptions ${selectedOptionIndex === index + 1 ? "selectedOption" : "unselectedOption"}`}
                        >
                            {(selectedOptionIndex === index + 1) && (
                                <div className="selectedOptionLine marginLeft8 marginRight16" />
                            )}
                            <div>
                                <p className="subheadingText">{option.name}</p>
                            </div>
                        </div>
                    ))}
                    {/*settingsOptions.slice(5).map((option, index) => (
                        <div>
                            {option.name}
                        </div>
                    ))*/}
                </div>
                <div className="rightMenuSettings">
                    {(selectedOptionIndex === 1 || (selectedThemeIndex === 0 || selectedThemeIndex === 1)) && ( // theme page on system settings
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
                                    {theme.isSelected && <img className="iconCheckMark" src={iconCheckMark} />}
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
                                    {theme.isSelected && <img className="iconCheckMark" src={iconCheckMark} />}
                                </div>
                            ))}
                            {(selectedThemeIndex === 0 || selectedThemeIndex === null) && (
                                <div className="themeLine"/>
                            )}    
                        </div>
                    )}
                    {selectedOptionIndex === 2 && (
                        <div className="wallpaperPage">
                            <div className="themeSpacer" />
                            {(selectedWallpaperIndex === 1 || selectedWallpaperIndex === null) && (
                                <div className="themeLine"></div>
                            )}
                            {settingsWallpaperOptions.slice(0,1).map((theme, index) => (
                                <div
                                    key={index}
                                    className={`themeRow ${selectedThemeIndex === index ? "themeRowSelected" : "themeRowNotSelected"} marginLeft144`}
                                >
                                    <div className="wallpaperTextContainer">
                                        <p className="subheadingText">{theme.name}</p>
                                    </div>
                                    {theme.isSelected && <img className="iconCheckMark" src={iconCheckMark} />}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="bottomMenuSettings">
                <div className="divider" />
                <p>Selected Option Index: {selectedOptionIndex}</p>
                <p>Selected Theme Index: {selectedThemeIndex}</p>
            </div>
        </div>
    );
}

export default ScreenSettings;
