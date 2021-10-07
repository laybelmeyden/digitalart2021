import React, { useState } from "react";

const Navbar = (props) => {
    const [navToggle, setnavToggle] = useState(false);
    const handleToggle = () => {
        setnavToggle(!navToggle);
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
                            <a href="">О проекте</a>
                        </div>
                        <div className="item">
                            <a href="">Новости</a>
                        </div>
                        <div className="item">
                            <a href="">Эксперты</a>
                        </div>
                        <div className="item">
                            <a href="">Школы</a>
                        </div>
                        <div className="item">
                            <a href="">Партнеры</a>
                        </div>
                        <div className="item">
                            <a href="">Контакты</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
