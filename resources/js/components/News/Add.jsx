import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { NewsAPI } from "../api";

const Add = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [imageData, setImage] = useState("");
    const handleChange = (e) => {
        setImage(e[0]);
    };
    const onSubmit = (e) => {
        setLoading(true);
        const fData = new FormData();
        fData.append("image", imageData);
        fData.append("title", title);
        fData.append("body", body);
        try {
            NewsAPI.addNews(fData);
            history.push("/admin");
        } catch (error) {
            alert("errors");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h1 className="h1__news__con">Добавить новость</h1>
            <Link to="/admin">Назад</Link>
            <form onSubmit={onSubmit}>
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
                            rows="3"
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
                            name="image"
                            onChange={(e) => {
                                handleChange(e.target.files);
                            }}
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
export default Add;
