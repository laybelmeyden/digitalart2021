import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { EventAPI } from "../api";

const Add = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [color, setColor] = useState("");
    const [city, setCity] = useState("");
    const [programm, setProgramm] = useState("");
    const [href_event, setHref_event] = useState("");


    const handleChange = (e) => {
        setProgramm(e[0]);
    };
    const onSubmit = (e) => {
        setLoading(true);
        const fData = new FormData();
        fData.append("programm", programm);
        fData.append("title", title);
        fData.append("body", body);
        fData.append("date", date);
        fData.append("time", time);
        fData.append("color", color);
        fData.append("city", city);
        fData.append("href_event", href_event);
        try {
            EventAPI.addEvent(fData);
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
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Дата
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="date"
                            placeholder="Дата"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Место
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="date"
                            placeholder="Место"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Время
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="time"
                            placeholder="Время"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Цвет
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="color"
                            placeholder="Цвет"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            ССылка
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="color"
                            placeholder="ССылка"
                            value={href_event}
                            onChange={(e) => setHref_event(e.target.value)}
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
                            Программа
                        </label>
                        <input
                            className="form-control"
                            type="file"
                            name="programm"
                            onChange={(e) => {
                                handleChange(e.target.files);
                            }}
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
