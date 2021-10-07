import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { NavLink } from "react-router-dom";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
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
                    <circle r="18" transform="matrix(-1 0 0 1 18 18)" fill="" />
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

const SamplePrevArrow = (props) => {
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
const Mainpage = (props) => {
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
    return (
        <div>
            <section id="header" className="container">
                <div className="header__grid">
                    <div className="first__item">
                        <img src="/assets/img/logo.svg" alt="logo" />
                        <h1>
                            Окружные школы <br /> цифрового искусства
                        </h1>
                        <a className="btn" href="">
                            Участвовать
                        </a>
                    </div>
                    <div className="second__item">
                        <img src="/assets/img/header.png" alt="header" />
                    </div>
                </div>
            </section>
            <section id="technologi" className="container">
                <div className="title__item">
                    <img src="/assets/img/tech.svg" alt="tech" />
                    <h2>Технологии прекрасного</h2>
                    <p>
                        Проект направлен на активную творческую молодежь (16-30
                        лет), которая стремиться создавать собственные проекты в
                        сфере цифрового искусства и реализовать свой творческий
                        потенциал.
                    </p>
                </div>
                <div className="numbers__item">
                    <div>
                        <p className="number">01</p>
                        <p className="text">
                            Поддержка молодых социально-активных людей,
                            стремящихся реализовать (раскрыть) свой творческий
                            потенциал, через использование цифровых технологий
                        </p>
                    </div>
                    <div>
                        <p className="number">02</p>
                        <p className="text">
                            Развитие практических навыков использования цифровых
                            технологий в создании Digital Art проектов
                        </p>
                    </div>
                </div>
            </section>
            <section id="about" className="container">
                <img className="hands" src="/assets/img/hand.png" alt="hand" />
                <p className="about__text">
                    Благодаря данному проекту, участники смогут не только
                    познакомиться с новыми цифровыми технологиями, но и
                    научиться применять их на практике, в создании творческих
                    идей, проектов.
                    <br />
                    <br />С другой стороны, для молодежи, которая тяготеет к
                    классическому искусству, окружные школы помогут расширить
                    грани традиционного восприятия творчества, расширить
                    творческий потенциал и возможности, благодаря применению
                    цифровых, интерактивных технологий. Кроме того, проект
                    позволяет самореализоваться творческим молодым людям,
                    благодаря проведению презентационной сессии проектов -
                    продемонстрировать свои достижения, включиться в решение
                    общерегиональных творческих задач, используя цифровые
                    технологии.
                </p>
                <p className="about__norif">
                    Чтобы принять участие в проекте необходимо перейти в раздел{" "}
                    <a href="/">выбрать федеральный округ</a> ознакомиться с
                    информацией и пройти регистрацию.
                </p>
                <a href="">
                    <div className="about__presents">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                        >
                            <path d="M13.5988 19.33L18.75 24.4825V11.25C18.75 10.56 19.31 10 20 10C20.69 10 21.25 10.56 21.25 11.25V24.4825L26.4012 19.3312C26.89 18.8425 27.6812 18.8425 28.1688 19.3312C28.6575 19.82 28.6575 20.6112 28.1688 21.0987L21.0975 28.1699C20.7975 28.4699 20.3875 28.5624 19.9987 28.4937C19.6112 28.5624 19.1999 28.4687 18.8999 28.1699L11.8287 21.0987C11.3399 20.6099 11.3399 19.8188 11.8287 19.3312C12.3188 18.8425 13.11 18.8425 13.5988 19.33ZM20 0C31.045 0 40 8.95373 40 20C40 31.0463 31.045 40 20 40C8.95503 40 -3.8147e-06 31.045 -3.8147e-06 20C-3.8147e-06 8.95503 8.95372 0 20 0ZM20 37.5C29.665 37.5 37.5 29.665 37.5 20C37.5 10.335 29.665 2.5 20 2.5C10.335 2.5 2.5 10.335 2.5 20C2.5 29.665 10.335 37.5 20 37.5Z" />
                        </svg>
                        <p>СКАЧАТЬ ПРЕЗЕНТАЦИЮ</p>
                    </div>
                </a>
            </section>
            <section id="news">
                <div className="container">
                    <h3>Новости проекта</h3>
                    <div className="swiper__block">
                        <Swiper slidesPerView="auto" spaceBetween={40}>
                            <SwiperSlide>
                                <NavLink to="/dasd">
                                    <div className="card__slider">
                                        <div className="img__block">
                                            <img
                                                src="/assets/img/photo.png"
                                                alt="photo"
                                            />
                                        </div>
                                        <div className="text__block">
                                            <p className="title">
                                                Окружные школы цифрового
                                                искусства стартуют в 8
                                                федеральных округах!
                                            </p>
                                            <p className="pretitle">
                                                Друзья, хотим поделиться с вами
                                                своей радостью - мы победили в
                                                первом конкурсе Президентского
                                                фонда культурных инициатив!
                                            </p>
                                            <p className="btn news__btn">
                                                Читать
                                            </p>
                                        </div>
                                    </div>
                                </NavLink>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NavLink to="/dasd">
                                    <div className="card__slider">
                                        <div className="img__block">
                                            <img
                                                src="/assets/img/photo.png"
                                                alt="photo"
                                            />
                                        </div>
                                        <div className="text__block">
                                            <p className="title">
                                                Окружные школы цифрового
                                                искусства стартуют в 8
                                                федеральных округах!
                                            </p>
                                            <p className="pretitle">
                                                Друзья, хотим поделиться с вами
                                                своей радостью - мы победили в
                                                первом конкурсе Президентского
                                                фонда культурных инициатив!
                                            </p>
                                            <p className="btn news__btn">
                                                Читать
                                            </p>
                                        </div>
                                    </div>
                                </NavLink>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NavLink to="/dasd">
                                    <div className="card__slider">
                                        <div className="img__block">
                                            <img
                                                src="/assets/img/photo.png"
                                                alt="photo"
                                            />
                                        </div>
                                        <div className="text__block">
                                            <p className="title">
                                                Окружные школы цифрового
                                                искусства стартуют в 8
                                                федеральных округах!
                                            </p>
                                            <p className="pretitle">
                                                Друзья, хотим поделиться с вами
                                                своей радостью - мы победили в
                                                первом конкурсе Президентского
                                                фонда культурных инициатив!
                                            </p>
                                            <p className="btn news__btn">
                                                Читать
                                            </p>
                                        </div>
                                    </div>
                                </NavLink>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NavLink to="/dasd">
                                    <div className="card__slider">
                                        <div className="img__block">
                                            <img
                                                src="/assets/img/photo.png"
                                                alt="photo"
                                            />
                                        </div>
                                        <div className="text__block">
                                            <p className="title">
                                                Окружные школы цифрового
                                                искусства стартуют в 8
                                                федеральных округах!
                                            </p>
                                            <p className="pretitle">
                                                Друзья, хотим поделиться с вами
                                                своей радостью - мы победили в
                                                первом конкурсе Президентского
                                                фонда культурных инициатив!
                                            </p>
                                            <p className="btn news__btn">
                                                Читать
                                            </p>
                                        </div>
                                    </div>
                                </NavLink>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NavLink to="/dasd">
                                    <div className="card__slider">
                                        <div className="img__block">
                                            <img
                                                src="/assets/img/photo.png"
                                                alt="photo"
                                            />
                                        </div>
                                        <div className="text__block">
                                            <p className="title">
                                                Окружные школы цифрового
                                                искусства стартуют в 8
                                                федеральных округах!
                                            </p>
                                            <p className="pretitle">
                                                Друзья, хотим поделиться с вами
                                                своей радостью - мы победили в
                                                первом конкурсе Президентского
                                                фонда культурных инициатив!
                                            </p>
                                            <p className="btn news__btn">
                                                Читать
                                            </p>
                                        </div>
                                    </div>
                                </NavLink>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            <section id="teams" className="container">
                <h4>Наша команда</h4>
                <div className="team__grid">
                    <div className="team__item">
                        <img src="/assets/img/sax.png" alt="sax" />
                        <p className="title">Станислав Сахаров</p>
                        <p className="pretitle">
                            президент АНО «Агентство инновационного развития»,
                            руководитель проекта
                        </p>
                    </div>
                    <div className="team__item">
                        <img src="/assets/img/ser.png" alt="ser" />
                        <p className="title">Сергеев Никита</p>
                        <p className="pretitle">
                            директор проектного офиса, организатор мероприятий
                        </p>
                    </div>
                    <div className="team__item">
                        <img src="/assets/img/ph1.png" alt="ser" />
                        <p className="title">Евгения Котельникова</p>
                        <p className="pretitle">
                            куратор ЦФО и СКФО по проекту
                        </p>
                    </div>
                    <div className="team__item">
                        <img src="/assets/img/ph2.png" alt="ser" />
                        <p className="title">Андрей Резников</p>
                        <p className="pretitle">куратор СФО и УФО по проекту</p>
                    </div>
                    <div className="team__item">
                        <img src="/assets/img/beb.png" alt="beb" />
                        <p className="title">Матвей Бебенин</p>
                        <p className="pretitle">
                            менеджер продукта компании «Сбер», эксперт
                        </p>
                    </div>
                    <div className="team__item">
                        <img src="/assets/img/fani.png" alt="fani" />
                        <p className="title">Фанис Сулейманов</p>
                        <p className="pretitle">
                            менеджер продукта компании «Озон», эксперт
                        </p>
                    </div>
                    <div className="team__item">
                        <img src="/assets/img/ph3.png" alt="fani" />
                        <p className="title">Дмитрий Ветров</p>
                        <p className="pretitle">
                            Сoddy преподаватель python, c/c++, эксперт
                        </p>
                    </div>
                    <div className="team__item">
                        <img src="/assets/img/posck.png" alt="posck" />
                        <p className="title">Андрей Поскряков</p>
                        <p className="pretitle">
                            консультант по клиентоориентированности, эксперт
                        </p>
                    </div>
                </div>
            </section>
            <section id="federal">
                <div className="container">
                    <h5>Выбрать федеральный округ</h5>
                    <div className="federal__grid">
                        <Slider {...settings}>
                            <div>
                                <a href="">
                                    <div className="federal__card green">
                                        <p className="title">
                                            СИБИРСКИЙ ФЕДЕРАЛЬНЫЙ ОКРУГ
                                        </p>
                                        <p className="adress">
                                            г. Омск, ул. Конферен-Холл (Точка
                                            кипения) Жукова, 21
                                        </p>
                                        <p className="date">
                                            15-17 октября в 10.00
                                        </p>
                                        <p className="btn btn__federal">
                                            Подробнее
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <div className="federal__card fiol">
                                        <p className="title">
                                            СИБИРСКИЙ ФЕДЕРАЛЬНЫЙ ОКРУГ
                                        </p>
                                        <p className="adress">
                                            г. Омск, ул. Конферен-Холл (Точка
                                            кипения) Жукова, 21
                                        </p>
                                        <p className="date">
                                            15-17 октября в 10.00
                                        </p>
                                        <p className="btn btn__federal">
                                            Подробнее
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <div className="federal__card fiol">
                                        <p className="title">
                                            СИБИРСКИЙ ФЕДЕРАЛЬНЫЙ ОКРУГ
                                        </p>
                                        <p className="adress">
                                            г. Омск, ул. Конферен-Холл (Точка
                                            кипения) Жукова, 21
                                        </p>
                                        <p className="date">
                                            15-17 октября в 10.00
                                        </p>
                                        <p className="btn btn__federal">
                                            Подробнее
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <div className="federal__card fiol">
                                        <p className="title">
                                            СИБИРСКИЙ ФЕДЕРАЛЬНЫЙ ОКРУГ
                                        </p>
                                        <p className="adress">
                                            г. Омск, ул. Конферен-Холл (Точка
                                            кипения) Жукова, 21
                                        </p>
                                        <p className="date">
                                            15-17 октября в 10.00
                                        </p>
                                        <p className="btn btn__federal">
                                            Подробнее
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            <section id="partners">
                <div className="container">
                    <div className="partners__grid">
                        <div className="item">
                            <a href="">
                                <img
                                    src="/assets/img/part1.png"
                                    alt="part1.png"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <h5>По вопросам участия в проекте:</h5>
                    <div className="social">
                        <div>
                            <img src="/assets/img/phone.svg" alt="phone" />
                            <a href="tel:8 (499) 753 01 25">
                                8 (499) 753 01 25
                            </a>
                        </div>
                        <div>
                            <img src="/assets/img/mail.svg" alt="mail" />
                            <a href="mailto:info@rusinnovations.com">
                                info@rusinnovations.com
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="sponsor">
                <div className="container">
                    <p>
                        Проект реализуется за счет средств Гранта,
                        предоставленного{" "}
                        <a href="">Президентским фондом культурных инициатив</a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mainpage;
