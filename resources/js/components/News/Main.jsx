import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NewsAPI } from "../api";

const Main = (props) => {
    const [news, setNews] = useState([]);
    const fetchPost = () => {
        NewsAPI.getAllNews().then((res) => {
            const result = res.data;
            setNews(result.data);
        });
    };
    useEffect(() => {
        fetchPost();
    }, []);

    const renderNews = () => {
        if (!news) {
            return (
                <tr>
                    <td colSpan="4">Грузим</td>
                </tr>
            );
        }
        if (news.length === 0) {
            return (
                <tr>
                    <td colSpan="4">Новостей нет</td>
                </tr>
            );
        }
        return news.map((e) => (
            <tr key={e.id}>
                <th scope="row">{e.id}</th>
                <td>{e.title}</td>
                {/* <td dangerouslySetInnerHTML={{ __html: e.body }}></td> */}
                <td>{e.data}</td>
                <td>
                    <Link to={`/newsEdit/${e.id}`}>Изменить</Link>
                    <a
                        onClick={() => {
                            NewsAPI.deletedNews(e.id)
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
