import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { authReducer } from "../app/reducers/auth";
import { login } from "../app/reducers/auth/userLog";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
    const dispatch = useAppDispatch();
    const { error, isLoading, checkbox } = useAppSelector(
        (state) => state.auth
    );
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const submit = () => {
        dispatch(login(username, password, checkbox));
    };

    return (
        <Form
            onFinish={submit}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            {error && <h1 style={{ color: "red" }}>Error:{error}</h1>}
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    { required: true, message: "Please input your username!" },
                ]}
            >
                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    { required: true, message: "Please input your password!" },
                ]}
            >
                <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Checkbox
                    onChange={() => {
                        dispatch(authReducer.actions.setRemem(!checkbox));
                    }}
                >
                    Remember me
                </Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
