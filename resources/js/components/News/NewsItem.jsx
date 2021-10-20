import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { NewsAPI } from "../api";

const NewsItem = (props) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const { id } = useParams();
    useEffect(() => {
        NewsAPI.getOneNews(id).then((res) => {
            const result = res.data;
            const news = result.data;
            setTitle(news.title);
            setBody(news.body);
            setImage(news.image);
        });
    }, []);
    return (
        <div className="container times__relict">
            <div className="img__container__news">
                <img src={`storage/news/${image}`} alt={image} />
            </div>
            <h1>{title}</h1>
            <p dangerouslySetInnerHTML={{ __html: body }}></p>
        </div>
    );
};

export default NewsItem;
