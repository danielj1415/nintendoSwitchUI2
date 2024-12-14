
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
                    
                </div>
            </div>
            <div className="bottomMenuSettings">
                
            </div>
        </div>
    );
}

export default ScreenAlbum; 