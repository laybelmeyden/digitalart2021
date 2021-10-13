import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { NavLink } from "react-router-dom";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HashLink as LinkScroll } from "react-router-hash-link";

const Mainpage = (props) => {
    return (
        <div>
            <section id="header" className="container">
                <div className="header__grid">
                    <div className="first__item">
                        <img src="/assets/img/logo.svg" alt="logo" />
                        <h1>
                            Окружные школы <br /> цифрового искусства
                        </h1>
                        <LinkScroll className="btn" to="/#federal">
                            Участвовать
                        </LinkScroll>
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
                    <LinkScroll to="/#federal">
                        выбрать федеральный округ
                    </LinkScroll>{" "}
                    ознакомиться с информацией и пройти регистрацию.
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
                                <NavLink to="/news1">
                                    <div className="card__slider">
                                        <div className="img__block">
                                            <img
                                                src="/assets/img/UzlITqaAjgA.jpg"
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
                                <NavLink to="/news2">
                                    <div className="card__slider">
                                        <div className="img__block">
                                            <img
                                                src="/assets/img/7gHEeSz1cP0.jpg"
                                                alt="photo"
                                            />
                                        </div>
                                        <div className="text__block">
                                            <p className="title">
                                                Окружная школа "Технологии
                                                прекрасного" стартует в Омске!
                                            </p>
                                            <p className="pretitle">
                                                Хочешь научиться работать в
                                                команде, генерировать креативные
                                                идеи, воплощать их в цифровом
                                                формате и использовать цифровые
                                                технологии в проектах?
                                            </p>
                                            <p className="btn news__btn">
                                                Читать
                                            </p>
                                        </div>
                                    </div>
                                </NavLink>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NavLink to="/news3">
                                    <div className="card__slider">
                                        <div className="img__block">
                                            <img
                                                src="/assets/img/b2ZHyavd-48.jpg"
                                                alt="photo"
                                            />
                                        </div>
                                        <div className="text__block">
                                            <p className="title">
                                                Окружная школа "Технологии
                                                прекрасного" стартует в Майкопе!
                                            </p>
                                            <p className="pretitle">
                                                Проект направлен на активную
                                                творческую молодежь, которая
                                                стремиться создавать собственные
                                                проекты в сфере цифрового
                                                искусства
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
                        <Slider {...props.settings}>
                            <div>
                                <NavLink to="/mero1">
                                    <div className="federal__card green">
                                        <p className="title">
                                            СИБИРСКИЙ ФЕДЕРАЛЬНЫЙ ОКРУ
                                        </p>
                                        <p className="adress">
                                            г. Омск, «Точка Кипения» АСИ на ул.
                                            Жукова 2
                                        </p>
                                        <p className="date">
                                            15-17 октября в 10.00
                                        </p>
                                        <p className="btn btn__federal">
                                            Подробнее
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="/mero2">
                                    <div className="federal__card fiol">
                                        <p className="title">
                                            ЮДЖНЫЙ ФЕДЕРАЛЬНЫЙ ОКРУГ
                                        </p>
                                        <p className="adress">
                                            г. Майкоп, Майкопский
                                            государственный технологический
                                            университет, ул. Первомайская, д.
                                            191
                                        </p>
                                        <p className="date">
                                            22-24 октября в 10.00
                                        </p>
                                        <p className="btn btn__federal">
                                            Подробнее
                                        </p>
                                    </div>
                                </NavLink>
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
            <footer id="footer">
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
