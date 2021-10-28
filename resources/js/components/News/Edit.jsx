import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { NewsAPI } from "../api";

const Edit = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const { id } = useParams();
    
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("body", body);


    const onSubmit = () => {
        setLoading(true);
        try {
            NewsAPI.updateNewsFile(
               formData, id
            );
            history.push("/admin");
        } catch (error) {
            alert("OYOYOOYOY");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        NewsAPI.getOneNews(id).then((res) => {
            const result = res.data;
            const news = result.data;
            setTitle(news.title);
            setBody(news.body);
        });
    }, []);
    return (
        <div className="container">
            <h1 className="h1__news__con">Изменить новость</h1>
            <Link to="/admin">Назад</Link>
            <form action="">
                <div className="editors__inputs">
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Заголовок
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="title"
                            placeholder="Заголовок"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                        >
                            Описание
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            name="body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">
                            Изображение
                        </label>
                        <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            name="image"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Сео
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Сео"
                            name="seo_title"
                        />
                    </div>
                    <div className="item">
                        <button
                            type="submit"
                            disabled={loading}
                            onClick={onSubmit}
                        >
                            {loading ? "loading..." : "Отправить"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default Edit;
