import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { EventAPI } from "../api";

const EventItem = (props) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [color, setColor] = useState("");
    const [city, setCity] = useState("");
    const [programm, setProgramm] = useState("");
    const [href_event, setHref_event] = useState("");
    const { id } = useParams();



    useEffect(() => {
        EventAPI.getOneEvent(id).then((res) => {
            const result = res.data;
            const event = result.data;
            setTitle(event.title);
            setBody(event.body);
            setDate(event.date);
            setColor(event.color);
            setTime(event.time);
            setCity(event.city);
            setProgramm(event.programm);
            setHref_event(event.href_event);
        });
    }, []);
    return (
        <div className="container times__relict">
            <h1>{title}</h1>
            <p dangerouslySetInnerHTML={{ __html: body }}></p>
            <p className="item">
            место проведения: {city}
            </p>
            <p className="item">даты: {date}</p>
            <p className="item">начало: {time}</p>
            <a href={`/storage/event/${programm}`} target="_blank">
                <div className="about__presents">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                    >
                        <path d="M13.5988 19.33L18.75 24.4825V11.25C18.75 10.56 19.31 10 20 10C20.69 10 21.25 10.56 21.25 11.25V24.4825L26.4012 19.3312C26.89 18.8425 27.6812 18.8425 28.1688 19.3312C28.6575 19.82 28.6575 20.6112 28.1688 21.0987L21.0975 28.1699C20.7975 28.4699 20.3875 28.5624 19.9987 28.4937C19.6112 28.5624 19.1999 28.4687 18.8999 28.1699L11.8287 21.0987C11.3399 20.6099 11.3399 19.8188 11.8287 19.3312C12.3188 18.8425 13.11 18.8425 13.5988 19.33ZM20 0C31.045 0 40 8.95373 40 20C40 31.0463 31.045 40 20 40C8.95503 40 -3.8147e-06 31.045 -3.8147e-06 20C-3.8147e-06 8.95503 8.95372 0 20 0ZM20 37.5C29.665 37.5 37.5 29.665 37.5 20C37.5 10.335 29.665 2.5 20 2.5C10.335 2.5 2.5 10.335 2.5 20C2.5 29.665 10.335 37.5 20 37.5Z"></path>
                    </svg>
                    <p>СКАЧАТЬ Программу</p>
                </div>
            </a>
                    <div className="btn_item">
                        <a href={href_event}>ПРИНЯТЬ УЧАСТИE</a>
                    </div>
        </div>
    );
};

export default EventItem;
