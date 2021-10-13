import React, { useState, useEffect } from "react";
import { HashLink as LinkScroll } from "react-router-hash-link";

const Navbar = (props) => {
    const [navToggle, setnavToggle] = useState(false);
    const handleToggle = () => {
        window.innerWidth >= 993
            ? setnavToggle(false)
            : setnavToggle(!navToggle);
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
            <div
                id="navbar"
                className={`container ${navToggle ? "outnavbar" : ""}`}
            >
                <nav>
                    <div className={`grid__nav ${navToggle ? "show" : ""}`}>
                        <div className="item">
                            <LinkScroll
                                to="/#technologi"
                                onClick={() => handleToggle(false)}
                            >
                                О проекте
                            </LinkScroll>
                        </div>
                        {/* <div className="item">
                            <LinkScroll
                                to="/#news"
                                onClick={() => handleToggle(false)}
                            >
                                Новости
                            </LinkScroll>
                        </div> */}
                        <div className="item">
                            <LinkScroll
                                to="/#teams"
                                onClick={() => handleToggle(false)}
                            >
                                Эксперты
                            </LinkScroll>
                        </div>
                        {/* <div className="item">
                            <LinkScroll
                                to="/#federal"
                                onClick={() => handleToggle(false)}
                            >
                                Школы
                            </LinkScroll>
                        </div> */}
                        <div className="item">
                            <LinkScroll
                                to="/#partners"
                                onClick={() => handleToggle(false)}
                            >
                                Партнеры
                            </LinkScroll>
                        </div>
                        <div className="item">
                            <LinkScroll
                                to="/#footer"
                                onClick={() => handleToggle(false)}
                            >
                                Контакты
                            </LinkScroll>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
