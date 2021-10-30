import React from "react";
import { Link } from "react-router-dom";
import { PhotoAPI } from "../api";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Photo = (props) => {
    const [photoAll, setPhotoAll] = React.useState([]);
    const [photoOne, setPhotoOne] = React.useState([]);
    React.useEffect(() => {
        PhotoAPI.getAllPhoto().then((res) => {
            const resultAllPhoto = res.data[0];
            const resultOnePhoto = res.data[1];
            setPhotoAll(resultAllPhoto);
            setPhotoOne(resultOnePhoto);
        });
    }, []);
    const splitArr = [];
    photoOne.map((e) => {
        const onSplit = e.split("___");
        splitArr.push(onSplit);
    });
    return (
        <div className="container gallereys">
            <h1>Галерея</h1>
            <div className="img__grid">
                {photoAll.map((eName, index) => {
                    return splitArr
                        .filter((e) => e[0] === eName)
                        .map((e, index) => (
                            <LightGallery
                                speed={500}
                                plugins={[lgThumbnail, lgZoom]}
                            >
                                <div
                                    data-src={`/assets/gallers/${eName}/${e[1]}`}
                                    key={index}
                                    className="img__wrapping"
                                >
                                    <img
                                        className="item"
                                        src={`/assets/gallers/${eName}/${e[1]}`}
                                        alt={e[1]}
                                    />
                                </div>
                            </LightGallery>
                        ));
                })}
            </div>
        </div>
    );
};

export default Photo;
