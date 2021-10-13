import { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { Link, NavLink } from "react-router-dom";
import MainNews from "../News/NewsContainer";
import MainCitys from "../Citys/Main";

const AdminPage = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        (async () => {
            const response = await fetch(
                window.document.location.protocol +
                    "//" +
                    window.document.location.host +
                    "/api/user",
                {
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                }
            );
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
                    {/* <div>
                        <div className="news">
                            <h1>Округа</h1>
                            <NavLink to="citysAdd">Добавить</NavLink>
                        </div>
                        <MainCitys />
                    </div> */}
                    <div className="btn btn__logout" onClick={props.logout}>
                        Выход
                    </div>
                </div>
            ) : (
                <div className="non__auth">
                    <p>Вы не авторизованны</p>
                    <Link to="login">Вход</Link>
                </div>
            )}
        </div>
    );
};

export default AdminPage;
