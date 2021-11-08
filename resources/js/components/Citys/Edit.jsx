import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { EventAPI } from "../api";

const Edit = () => {
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
    const { id } = useParams();

    const formData = new FormData();
    formData.append("programm", programm);
    formData.append("title", title);
    formData.append("body", body);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("color", color);
    formData.append("href_event", href_event);

    // const handleChange = (e) => {
    //     setProgramm(e[0]);
    // };
    const onSubmit = (e) => {
        setLoading(true);
        try {
            EventAPI.updateEventsFile(
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
        EventAPI.getOneEvent(id).then((res) => {
            const result = res.data;
            const event = result.data;
            setTitle(event.title);
            setBody(event.body);
            setDate(event.date);
            setTime(event.time);
            setColor(event.color);
            setCity(event.city);
            setProgramm(event.programm);
            setHref_event(event.href_event);
        });
    }, []);
    return (
        <div className="container">
            <h1 className="h1__news__con">Изменить школу</h1>
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
                            placeholder="Дата"
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
                            onChange={(e) => setProgramm(e.target.files[0])}
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
