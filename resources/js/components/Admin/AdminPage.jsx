import { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { Link, NavLink } from "react-router-dom";
import MainNews from "../News/NewsContainer";
import MainEvent from "../Citys/EventContainer";

const AdminPage = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [redirect, setRedirect] = useState(false);
    const logout = async () => {
        const response = await fetch(
            window.document.location.protocol +
            "//" +
            window.document.location.host +
            "/api/logout",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            }
            );
        setRedirect(true);
    };
    useEffect(() => {
        (async () => {
            const response = await fetch(
                window.document.location.protocol +
                    "//" +
                    window.document.location.host +
                    "/api/user",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    credentials: "include",
                }
            )
            const content = await response.json();

            setName(content.name);
            setEmail(content.email);
        })();
    });
    if (redirect) return <Redirect to="login" />;
    return (
        <div className="container">
            {email ? (
                <div className="auth__container">
                    <div>
                        <div className="news">
                            <h1>Новости</h1>
                            <NavLink to="newsAdd">Добавить</NavLink>
                        </div>
                        <MainNews />
                    </div>
                    <div>
                        <div className="news">
                            <h1>Школы</h1>
                            <NavLink to="eventAdd">Добавить</NavLink>
                        </div>
                        <MainEvent />
                    </div>
                    <div className="btn btn__logout" onClick={logout}>
                        Выход
                    </div>
                </div>
            ) : (
                <div className="non__auth">
                    <p>Вы не авторизованы</p>
                    <Link to="login">Вход</Link>
                </div>
            )}
        </div>
    );
};

export default AdminPage;
