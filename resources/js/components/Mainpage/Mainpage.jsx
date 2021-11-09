import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { NavLink } from "react-router-dom";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HashLink as LinkScroll } from "react-router-hash-link";
import ContactForm from "../Contact/ContactForm";

const Mainpage = (props) => {
    useEffect(() => {
        props.fetchPostNews();
    }, []);
    useEffect(() => {
        props.fetchPostEvent();
    }, []);

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
                        лет), которая стремится создавать собственные проекты в
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
                            {props.news.map((e) => (
                                <SwiperSlide key={e.id}>
                                    <NavLink to={`/news/${e.id}`}>
                                        <div className="card__slider">
                                            <div className="img__block">
                                                <img
                                                    src={`storage/news/${e.image}`}
                                                    alt="photo"
                                                />
                                            </div>
                                            <div className="text__block">
                                                <p className="title">
                                                    {e.title.slice(0, 60)}
                                                </p>
                                                <p className="pretitle">
                                                    {e.body.slice(0, 123) +
                                                        "..."}
                                                </p>
                                                <p className="btn news__btn">
                                                    Читать
                                                </p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                            ))}
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
                        <img src="/assets/img/kotel.png" alt="ser" />
                        <p className="title">Евгения Котельникова</p>
                        <p className="pretitle">
                            куратор ЦФО и СКФО по проекту
                        </p>
                    </div>
                    <div className="team__item">
                        <img src="/assets/img/rez.png" alt="ser" />
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
                        <img src="/assets/img/vetr.png" alt="fani" />
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
                    <div className="team__item">
                        <img src="/assets/img/guliyaeva.png" alt="guliyaeva.png" />
                        <p className="title">Гуляева Алёна</p>
                        <p className="pretitle">
                        Аспирант Института высшей нервной деятельности и нейрофизиологии РАН. Заместитель генерального директора Arteo.tech
                        </p>
                    </div>
                </div>
            </section>
            <section id="federal">
                <div className="container">
                    <h5>Выбрать федеральный округ</h5>
                    <div className="federal__grid">
                        <Slider {...props.settings}>
                            {props.event.map((e) => (
                                <div key="e.id">
                                    <NavLink to={`/event/${e.id}`}>
                                        <div
                                            className={`federal__card ${e.color}`}
                                        >
                                            <p className="title">{e.title}</p>
                                            <p className="adress">{e.city}</p>
                                            <p className="date">
                                                {`${e.date} ${e.time}`}
                                            </p>
                                            <p className="btn btn__federal">
                                                Подробнее
                                            </p>
                                        </div>
                                    </NavLink>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
            <section id="partners">
                <div className="container">
                    <div className="partners__grid">
                        <div className="item">
                            <a href="https://xn--80aeeqaabljrdbg6a3ahhcl4ay9hsa.xn--p1ai/">
                                <img
                                    src="/assets/img/part1.png"
                                    alt="part1.png"
                                />
                            </a>
                        </div>
                        <div className="item">
                            <a href="https://youth.gov-murman.ru/">
                                <img
                                    src="/assets/img/prav2.png"
                                    alt="part1.png"
                                />
                            </a>
                        </div>
                        <div className="item">
                            <a href="https://www.murmancongress.ru/">
                                <img
                                    src="/assets/img/part3.png"
                                    alt="part1.png"
                                />
                            </a>
                        </div>
                        <div className="item">
                            <a href="https://mkgtu.ru/">
                                <img
                                    src="/assets/img/logomgty.png"
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
                    <div className="footer__item">
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
                        <div className="form__container">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </footer>
            <div className="sponsor">
                <div className="container">
                    <p>
                        Проект реализуется Агентством инновационного развития за
                        счет средств Гранта, предоставленного{" "}
                        <a href="https://xn--80aeeqaabljrdbg6a3ahhcl4ay9hsa.xn--p1ai/">
                            Президентским фондом культурных инициатив
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mainpage;
