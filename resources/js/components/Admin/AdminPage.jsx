import { useState, useEffect } from "react";
import { Redirect } from "react-router";

const AdminPage = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        (async () => {
            const response = await fetch(
                "http://" + window.document.location.host + "/api/user",
                {
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                }
            );
            const content = await response.json();

            setName(content.name)
            setEmail(content.email)
        })();
    });
    const logout = async () =>{
        const response = await fetch(
            "http://" + window.document.location.host + "/api/logout",
            {
                method:'POST',
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            }
        );
        setRedirect(true);
    }
    if(redirect) return <Redirect to="login"/>
    return (
        <div className="container">
           {
               name ? 'HI MAN' + email : "Вы не авторизованны"
           } 
           <div onClick={logout}>Выход</div>
        </div>
    );
};

export default AdminPage;
