import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from "antd";
import { Redirect } from "react-router";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const onFinish = async (e) => {   
        const res = await fetch(window.document.location.protocol+'//'+window.document.location.host+'/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,password
            })
        });
        setRedirect(true);
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
            <div className="login__form">
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={onFinish}
            >
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
                        Вход
                    </Button>
                </Form.Item>
            </Form>
            </div>
        </div>
    )
}
