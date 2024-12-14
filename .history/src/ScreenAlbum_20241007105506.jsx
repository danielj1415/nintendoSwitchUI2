
import "./ScreenAlbum.css";

import { useNavigate } from "react-router-dom";


function ScreenAlbum(){
    return (
        <div className="settingsScreen">
            <div className="topMenuSettings">
                <div className="topMenuRow">
                    <img src={iconBrightnessLight} className="iconBrightnessLight marginRight28 marginLeft108" />
                    <p className="headingText">System Settings</p>
                    <p>Selected Option Index: {selectedOptionIndex}</p>
                    <p>Selected Theme Index: {selectedThemeIndex}</p>
                    <p>Selected Wallpaper Index: {selectedWallpaperIndex}</p>
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
                    {(selectedOptionIndex === 2 || (selectedWallpaperIndex === 0 || selectedWallpaperIndex === 1)) && (
                        <div className="wallpaperPage">
                            <div className="themeSpacer" />
                            {(selectedWallpaperIndex === 1 || selectedWallpaperIndex === null) && (
                                <div className="themeLine"></div>
                            )}
                            {settingsWallpaperOptions.slice(0,1).map((theme, index) => (
                                <div
                                    key={index}
                                    className={`themeRow ${selectedWallpaperIndex === index ? "themeRowSelected" : "themeRowNotSelected"} marginLeft144`}
                                >
                                    <div className="basicWallpaperContainer ">
                                        <p className="subheadingText marginLeft32">{theme.name}</p>
                                    </div>
                                </div>
                            ))}
                            {selectedWallpaperIndex === null && (
                                <div className="themeLine"/>
                            )}
                            {settingsWallpaperOptions.slice(1, 2).map((theme, index) => (
                                <div
                                    key={index}
                                    className={`themeRow ${selectedWallpaperIndex === index + 1 ? "themeRowSelected" : "themeRowNotSelected"} marginLeft144`}
                                >
                                    <div className="basicWallpaperContainer ">
                                        <p className="subheadingText marginLeft32">{theme.name}</p>
                                    </div>
                                </div>
                            ))}
                            {(selectedWallpaperIndex === 0 || selectedWallpaperIndex === null) && (
                                <div className="themeLine"/>
                            )} 
                        </div>
                    )}
                </div>
            </div>
            <div className="bottomMenuSettings">
                <div className="divider" />
                <div className = "bottomMenuRowSettings">
                    <img src={iconSwitchDark} className="iconSwitchDark" />
                    <div className = "bottomMenuSettingsTextIcons">
                    <img src = {iconBDark} className = "iconBSettings"/>
                    <p className="bottomMenuSettingsRowText">Back</p>
                    <img src = {iconADark} className = "iconASettings"/>
                    <p className="bottomMenuSettingsRowText">OK</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenAlbum; 