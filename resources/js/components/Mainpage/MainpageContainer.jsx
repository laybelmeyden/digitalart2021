import React from "react";
import { connect } from "react-redux";
import Mainpage from "./Mainpage";

export const SampleNextArrow = (props) => {
    const { onClick, className } = props;
    return (
        <div className={className} onClick={onClick}>
            <div className="arrow right">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                >
                    <circle
                        r="18"
                        transform="matrix(-1 0 0 1 18 18)"
                        fill=""
                    />
                    <g>
                        <path
                            d="M26.7938 17.5023C26.7936 17.5021 26.7934 17.5018 26.7931 17.5016L23.1192 13.8454C22.8439 13.5715 22.3988 13.5725 22.1248 13.8478C21.8508 14.123 21.8519 14.5682 22.1271 14.8421L24.5938 17.2969H9.70312C9.31479 17.2969 9 17.6117 9 18C9 18.3883 9.31479 18.7031 9.70312 18.7031H24.5938L22.1272 21.1579C21.8519 21.4318 21.8509 21.877 22.1248 22.1522C22.3988 22.4275 22.844 22.4285 23.1192 22.1546L26.7932 18.4984C26.7934 18.4982 26.7936 18.4979 26.7938 18.4977C27.0692 18.2228 27.0683 17.7762 26.7938 17.5023Z"
                            fill="white"
                        />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export const SamplePrevArrow = (props) => {
    const { onClick, className } = props;
    return (
        <div className={className} onClick={onClick}>
            <div className="arrow left">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                >
                    <circle cx="18" cy="18" r="18" fill="" />
                    <g>
                        <path
                            d="M9.20623 17.5023C9.20644 17.5021 9.20661 17.5018 9.20686 17.5016L12.8808 13.8454C13.1561 13.5715 13.6012 13.5725 13.8752 13.8478C14.1492 14.123 14.1481 14.5682 13.8729 14.8421L11.4062 17.2969H26.2969C26.6852 17.2969 27 17.6117 27 18C27 18.3883 26.6852 18.7031 26.2969 18.7031H11.4062L13.8728 21.1579C14.1481 21.4318 14.1491 21.877 13.8752 22.1522C13.6012 22.4275 13.156 22.4285 12.8808 22.1546L9.20682 18.4984C9.20661 18.4982 9.20644 18.4979 9.20619 18.4977C8.93081 18.2228 8.93169 17.7762 9.20623 17.5023Z"
                            fill="white"
                        />
                    </g>
                </svg>
            </div>
        </div>
    );
};
const MainpageContainer = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 900,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return <Mainpage 
    settings={settings}/>;
};
const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, {})(MainpageContainer);
