import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import swal from 'sweetalert';
import axios from "axios";
import { Redirect } from "react-router";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const onFinish = async (e) => {   
        const res = await fetch(window.document.location.protocol+'//'+window.document.location.host+'/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,email,password
            })
        });
        setRedirect(true);
        // const content = await res.json();
        // console.log(content)
        swal({
            title: "Успешно",
            text: "Вы можете войти",
            icon: "success",
            button: "ок",
          });
    }
    if(redirect) return <Redirect to="admin"/>

    return (
        <div className="container">
            <div className="register">
                <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Имя"
                        name="name"
                        onChange={e => setName(e.target.value)}
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Почта"
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 12, span: 0 }}>
                        <Button type="primary" htmlType="submit">
                            Регистрация
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
