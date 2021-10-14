import React, { useState } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";
const ContactForm = (props) => {
    const [fetch, isFetching] = useState();
    const [formEnd, isformEnd] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        isFetching(true);
        await emailjs
            .sendForm(
                "service_qtf4lhq",
                "template_1mph103",
                e.target,
                "user_Wr9ub1dxijcS6Q0UMCowP"
            )
            .then(
                (result) => {
                    swal({
                        title: "Успешно",
                        text: "Ваш вопрос отправлен",
                        icon: "success",
                        button: "закрыть",
                    });
                },
                (error) => {
                    swal({
                        title: "Ошибка",
                        text: "Ваш вопрос не отправлен",
                        icon: "error",
                        button: "закрыть",
                    });
                }
            );
        isFetching(false);
        isformEnd(true);
    };

    return (
        <div className="contact__form__container">
            {formEnd ? (
                <h5>
                    Спасибо за ваш вопрос! <br /> Ожидайте ответа на вашу почту
                </h5>
            ) : (
                <form onSubmit={sendEmail}>
                    <input
                        type="hidden"
                        name="subject"
                        value="digitalart2021.ru"
                    />
                    <div className="item">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Ваше ФИО"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Ваша почта"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <textarea
                            name="introduction"
                            placeholder="Введите ваше сообщение"
                        />
                    </div>
                    <div className="btn__item">
                        <button onSubmit={sendEmail} disabled={fetch}>
                            {fetch ? (
                                <div className="fetch__btn">
                                    Идет отправка
                                    <div className="lds-ring">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            ) : (
                                <div>Отправить</div>
                            )}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
