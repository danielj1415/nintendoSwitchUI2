
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