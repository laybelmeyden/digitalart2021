import React, { useState } from "react";

const Navbar = (props) => {
    const [navToggle, setnavToggle] = useState(false);
    const handleToggle = () => {
        window.innerWidth >= 993 ? setnavToggle(false) : setnavToggle(!navToggle);
    };
    return (
        <div>
            <div className="container">
                <div className="mobile__container" onClick={handleToggle}>
                    <div className="hamburger__menu">
                        <div
                            className={`item ${
                                navToggle ? "item__rotate" : ""
                            }`}
                        ></div>
                    </div>
                </div>
            </div>
            <div id="navbar" className={`container ${navToggle ? "outnavbar" : ""}`}>
                <nav>
                    <div className={`grid__nav ${navToggle ? "show" : ""}`}>
                        <div className="item">
                            <a href="#technologi" onClick={()=>handleToggle(false)}>О проекте</a>
                        </div>
                        {/* <div className="item">
                            <a href="">Новости</a>
                        </div> */}
                        <div className="item">
                            <a href="#teams" onClick={()=>handleToggle(false)}>Эксперты</a>
                        </div>
                        {/* <div className="item">
                            <a href="">Школы</a>
                        </div> */}
                        <div className="item">
                            <a href="#partners" onClick={()=>handleToggle(false)}>Партнеры</a>
                        </div>
                        <div className="item">
                            <a href="#footer" onClick={()=>handleToggle(false)}>Контакты</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
