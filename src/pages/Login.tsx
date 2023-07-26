import { Layout, Row } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { authReducer } from "../app/reducers/auth";
import LoginForm from "../components/LoginForm";
import ModalWind from "../components/ModalWind";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const { isModalLoginOpen } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <ModalWind
                    setIsModalOpen={dispatch(
                        authReducer.actions.setisModalLoginOpen
                    )}
                    isModalOpen={isModalLoginOpen}
                >
                    <LoginForm />
                </ModalWind>
            </Row>
        </Layout>
    );
};

export default Login;
