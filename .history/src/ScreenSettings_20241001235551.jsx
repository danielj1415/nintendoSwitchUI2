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
    const [selectedThemeIndex, setSelectedThemeIndex] = useState(0); // Tracks the currently selected theme.
    const [activeMenu, setActiveMenu] = useState("options"); // Tracks which menu is active ("options" or "themes")

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (activeMenu === "options") {
                if (event.key === "ArrowDown") {
                    event.preventDefault();
                    setSelectedOptionIndex((prevIndex) =>
                        prevIndex < settingsOptions.length - 1 ? prevIndex + 1 : 0
                    );
                } else if (event.key === "ArrowUp") {
                    event.preventDefault();
                    setSelectedOptionIndex((prevIndex) =>
                        prevIndex > 0 ? prevIndex - 1 : settingsOptions.length - 1
                    );
                } else if (event.key === "ArrowRight") {
                    event.preventDefault();
                    // Switch focus to themes menu
                    setActiveMenu("themes");
                    setSelectedThemeIndex(0); // Focus the first theme
                }
            } else if (activeMenu === "themes") {
                if (event.key === "ArrowDown") {
                    event.preventDefault();
                    setSelectedThemeIndex((prevIndex) =>
                        prevIndex < themeOptions.length - 1 ? prevIndex + 1 : 0
                    );
                } else if (event.key === "ArrowUp") {
                    event.preventDefault();
                    setSelectedThemeIndex((prevIndex) =>
                        prevIndex > 0 ? prevIndex - 1 : themeOptions.length - 1
                    );
                } else if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    // Switch focus back to options menu
                    setActiveMenu("options");
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeMenu, settingsOptions.length, themeOptions.length]);

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
                    {settingsOptions.map((option, index) => (
                        <div
                            key={index}
                            className={`leftMenuOptions ${
                                selectedOptionIndex === index ? "selectedOption" : "unselectedOption"
                            }`}
                        >
                            {selectedOptionIndex === index && (
                                <div className="selectedOptionLine marginLeft8 marginRight16" />
                            )}
                            <div>
                                <p className="subheadingText">{option.name}</p>
                            </div>
                            {index === 0 && <div className="lineAfterOption"></div>}
                        </div>
                    ))}
                </div>
                <div className="rightMenuSettings">
                    {activeMenu === "themes" && (
                        <div className="themePage">
                            <div className="themeSpacer" />
                            {themeOptions.map((theme, index) => (
                                <div
                                    key={index}
                                    className={`themeRow ${
                                        selectedThemeIndex === index ? "themeRowSelected" : "themeRowNotSelected"
                                    } marginLeft144`}
                                >
                                    <div
                                        className={`${theme.colorClass} ${
                                            selectedThemeIndex === index
                                                ? "selectedThemeMarginRightSpacing selectedThemeMarginLeftSpacing"
                                                : "marginRight16 marginLeft32"
                                        }`}
                                    ></div>
                                    <div className="basicColorContainer">
                                        <p className="subheadingText">{theme.name}</p>
                                    </div>
                                    {selectedThemeIndex === index && (
                                        <img className="iconCheckMark" src={iconCheckMark} />
                                    )}
                                </div>
                            ))}
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
