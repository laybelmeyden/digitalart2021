import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EventAPI } from "../api";

const Main = (props) => {
    const [event, setEvent] = useState([]);
    const fetchPost = () => {
        EventAPI.getAllEvent().then((res) => {
            const result = res.data;
            setEvent(result.data);
        });
    };
    useEffect(() => {
        fetchPost();
    }, []);

    const renderNews = () => {
        if (!event) {
            return (
                <tr>
                    <td colSpan="4">Грузим</td>
                </tr>
            );
        }
        if (event.length === 0) {
            return (
                <tr>
                    <td colSpan="4">Школ нет</td>
                </tr>
            );
        }
        return event.map((e) => (
            <tr key={e.id}>
                <th scope="row">{e.id}</th>
                <td>{e.title}</td>
                {/* <td dangerouslySetInnerHTML={{ __html: e.body }}></td> */}
                <td>{e.data}</td>
                <td>
                    <Link to={`/eventEdit/${e.id}`}>Изменить</Link>
                    <a
                        onClick={() => {
                            EventAPI.deletedEvent(e.id)
                                .then(fetchPost)
                                .catch("QOOQOQO");
                        }}
                    >
                        Удалить
                    </a>
                </td>
            </tr>
        ));
    };
    return (
        <div className="table__container">
            <table className="table__item">
                <thead>
                    <tr>
                        <th scope="col">
                            <h1>#</h1>
                        </th>
                        <th scope="col">Название</th>
                        <th scope="col">Дата</th>
                        <th scope="col">Действия</th>
                    </tr>
                </thead>
                <tbody>{renderNews()}</tbody>
            </table>
        </div>
    );
};
export default Main;
